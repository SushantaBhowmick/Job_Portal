import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { jobLoadAction } from '../redux/actions/jobAction'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Card,
  Container,
  ListItemIcon,
  MenuItem,
  MenuList,
  Pagination,
  Stack,
  Typography
} from '@mui/material'
import { useTheme } from '@emotion/react'
import { Link, useParams } from 'react-router-dom'
import CardElement from '../components/CardElement'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { jobTypeLoadAction } from '../redux/actions/jobTypeAction'
import SelectComponent from '../components/SelectComponent'
import LocationOn from '@mui/icons-material/LocationOn'

const Home = () => {
  
  const { palette } = useTheme();
  const [page, setPage] = useState(1);
  const [cat, setCat] = useState("");
  const { keyword, location } = useParams();
  const { jobs, setUniqueLocation, totalPages, loading, error } = useSelector(state => state.loadJobs)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
  }, [dispatch, page, keyword, cat, location]);

  useEffect(() => {
    dispatch(jobTypeLoadAction())
  }, [dispatch])

  const handleChangeCategory = (e) => {
    setCat(e.target.value);
}

  return (
    <>
      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}
      >
        <Navbar />
        <Header />
        |<Container>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Box sx={{ flex: 2, p: 2 }}>
              <Card sx={{ minHeight: 150, mb: 3, mt: 3, p: 2 }}>
                <Box sx={{ pb: 2 }}>
                  <Typography
                    component={"h4"}
                    sx={{ color: palette.secondary.main, fontWeight: 600 }}
                    children={"Filter job by category"}
                  />
                </Box>
                <SelectComponent handleChangeCategory={handleChangeCategory} cat={cat} />

              </Card>
                {/* jobs by location */}
                <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                                <Box sx={{ pb: 2 }}>
                                    {/* <h4>Filter by category</h4> */}
                                    <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                                        Filter job by location
                                    </Typography>
                                    <MenuList>
                                        {
                                            setUniqueLocation && setUniqueLocation.map((location, i) => (
                                                <MenuItem key={i}>
                                                    <ListItemIcon>
                                                        <LocationOn sx={{ color: palette.secondary.main, fontSize: 18 }} />
                                                    </ListItemIcon>
                                                    <Link to={`/search/location/${location}`}>{location}</Link>
                                                </MenuItem>

                                            ))
                                        }

                                    </MenuList>

                                </Box>
                            </Card>
            </Box>

            <Box sx={{ flex: 5, p: 2 }}>

              {

                loading ? <Loader /> :
                  jobs && jobs.length === 0 ?
                    <>
                      <Box
                        sx={{
                          minHeight: "350px",
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <h2>No result found!</h2>
                      </Box>
                    </> :

                    jobs && jobs.map((job) => (
                      <CardElement
                        key={job._id}
                        id={job._id}
                        jobTitle={job.title}
                        description={job.description}
                        category={job.jobType ? job.jobType.jobTypeName : "No Category"}
                        location={job.location}
                      />
                    ))
              }
              <Stack spacing={2} >
                <Pagination page={page} count={totalPages === 0 ? 1 : totalPages} onChange={(event, value) => setPage(value)} />
              </Stack>

            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>

  )
}

export default Home