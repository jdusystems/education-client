import {
  Grid,
  Stack,
  Rating,
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormGroup,
  TextField,
  MenuItem,
  Typography,
  Slider,
  Pagination,
  Card,
  CardContent,
  Avatar,
  Box,
  Fab,
  Button,
  IconButton,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import academyLogo from "../Assets/img/academy-logo.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendOutlined from "@mui/icons-material/SendOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useTheme } from "@mui/material/styles";
import TagIcon from "@mui/icons-material/Tag";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CloseIcon from "@mui/icons-material/Close";

//
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import UniversityApplication from "./UniversityApplication";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

function Application() {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState([0]);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [value, setValue] = React.useState([0, 0]);
  const [academy, setAcademy] = useState("");
  const [direction, setDirection] = useState("");
  const [subject, setSubject] = useState("");

  const [rating, setRating] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  function detail() {
    navigate("/detail");
  }

  return (
    <Container>
      <Stack>
        {/* <Typography my={3} variant='h6' color='primary' fontWeight='bold'>Submit an Applications</Typography> */}
        <Grid container mt={3} spacing={1}>
          <Grid item xl={4} md={4} sm={4} xs={12}>
            <Typography
              sx={{
                color: "black",
                fontSize: "22px",
                fontFamily: "Inter",
                fontWeight: 500,
                lineHeight: "24px",
                wordWrap: "break-word",
              }}
            >
              Category:
            </Typography>
            <Grid container mt={5}>
              <Grid item xl={12} md={12} sm={12} xs={12}>
                <FormControl fullWidth>
                  <FormGroup sx={{ marginTop: "1rem" }}>
                    <TextField
                      id="outlined-select-currency"
                      select
                      value={academy}
                      onChange={(e) => {
                        setAcademy(e.target.value);
                      }}
                      color="primary"
                      label="Academy"
                      helperText="Please select Academy"
                    >
                      <MenuItem value="O'quv Markaz">O'quv Markaz</MenuItem>
                      <MenuItem value="Universitet">Universitet</MenuItem>
                      <MenuItem value="Maktab">Maktab</MenuItem>
                      <MenuItem value="Maktabgacha Talim">
                        Maktabgacha Talim
                      </MenuItem>
                    </TextField>
                  </FormGroup>
                  <FormGroup sx={{ marginTop: "2rem" }}>
                    <TextField
                      id="outlined-select-currency"
                      select
                      value={direction}
                      onChange={(e) => {
                        setDirection(e.target.value);
                      }}
                      color="primary"
                      label="Direction"
                      helperText="Please select Direction"
                    >
                      <MenuItem value="IT">IT</MenuItem>
                      <MenuItem value="Sport">Sport</MenuItem>
                      <MenuItem value="Musiqa">Musiqa</MenuItem>
                    </TextField>
                  </FormGroup>
                  <FormGroup sx={{ marginTop: "2rem" }}>
                    <TextField
                      id="outlined-select-currency"
                      select
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                      color="primary"
                      label="Subject"
                      helperText="Please select Subject"
                    >
                      <MenuItem value="Frontend Developer">
                        Frontend Developer
                      </MenuItem>
                      <MenuItem value="Futbol">Futbol</MenuItem>
                      <MenuItem value="Vakal">Vakal</MenuItem>
                    </TextField>
                  </FormGroup>
                </FormControl>
              </Grid>
            </Grid>

            {/* Figmada pricedan oldingi logosi bor Musiqa Fan sport Language va h.k lar start   */}
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              mt={5}
              mb={5}
            >
              <Button
                variant="text"
                sx={{ cursor: "pointer" }}
                startIcon={
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6673 3.0957V14.7624C16.6672 15.4961 16.4249 16.2093 15.9781 16.7913C15.5313 17.3734 14.905 17.7917 14.1962 17.9815C13.4874 18.1713 12.7358 18.1219 12.0579 17.841C11.3801 17.5602 10.8139 17.0634 10.4471 16.428C10.0802 15.7925 9.93337 15.0537 10.0292 14.3263C10.125 13.5988 10.4582 12.9233 10.9771 12.4045C11.496 11.8857 12.1715 11.5525 12.899 11.4568C13.6265 11.361 14.3652 11.508 15.0007 11.8749V5.5957H7.50066V14.7624C7.50049 15.4961 7.25823 16.2093 6.81143 16.7913C6.36464 17.3734 5.73829 17.7917 5.02951 17.9815C4.32073 18.1713 3.56913 18.1219 2.89128 17.841C2.21342 17.5602 1.64719 17.0634 1.28038 16.428C0.913581 15.7925 0.766708 15.0537 0.862543 14.3263C0.958378 13.5988 1.29156 12.9233 1.81043 12.4045C2.3293 11.8857 3.00485 11.5525 3.73233 11.4568C4.4598 11.361 5.19854 11.508 5.83399 11.8749V3.0957H16.6673Z"
                      fill="black"
                    />
                  </svg>
                }
              >
                Musiqa
              </Button>

              <Button
                variant="text"
                sx={{ cursor: "pointer" }}
                startIcon={
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6667 18.929H5.41667C4.64312 18.929 3.90125 18.6217 3.35427 18.0748C2.80729 17.5278 2.5 16.7859 2.5 16.0124V4.76237C2.5 4.09933 2.76339 3.46345 3.23223 2.9946C3.70107 2.52576 4.33696 2.26237 5 2.26237H16.6667C16.8877 2.26237 17.0996 2.35017 17.2559 2.50645C17.4122 2.66273 17.5 2.87469 17.5 3.0957V18.0957C17.5 18.3167 17.4122 18.5287 17.2559 18.685C17.0996 18.8412 16.8877 18.929 16.6667 18.929ZM15.8333 17.2624V14.7624H5.41667C5.08515 14.7624 4.7672 14.8941 4.53278 15.1285C4.29836 15.3629 4.16667 15.6809 4.16667 16.0124C4.16667 16.3439 4.29836 16.6618 4.53278 16.8963C4.7672 17.1307 5.08515 17.2624 5.41667 17.2624H15.8333Z"
                      fill="black"
                    />
                  </svg>
                }
              >
                Fan
              </Button>

              <Button
                variant="text"
                sx={{ cursor: "pointer" }}
                startIcon={
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3043 11.734L11.7835 12.5882C10.9005 14.544 10.8076 16.7655 11.5243 18.7882C11.0215 18.8823 10.5109 18.9294 9.99935 18.929C8.81853 18.9309 7.65088 18.6809 6.57435 18.1957L10.3043 11.734ZM13.2352 13.4274L16.7635 15.464C15.8444 16.7397 14.5843 17.7304 13.1277 18.3224C12.5729 16.8245 12.5753 15.177 13.1343 13.6807L13.2352 13.4274ZM7.38268 10.0474L8.86185 10.9007L5.13185 17.359C3.7521 16.3653 2.70841 14.9742 2.14018 13.3715C4.15379 12.9997 5.95938 11.8979 7.21102 10.2774L7.38268 10.0474ZM18.2544 9.44237C18.3069 9.81987 18.3335 10.2049 18.3335 10.5957C18.3354 11.7765 18.0854 12.9442 17.6002 14.0207L14.0702 11.9832C15.064 10.6715 16.5087 9.77455 18.1252 9.4657L18.2544 9.44237ZM2.40018 7.17154L5.92935 9.20904C4.908 10.5569 3.41207 11.4656 1.74518 11.7507C1.69242 11.368 1.66597 10.9821 1.66602 10.5957C1.66602 9.37487 1.92852 8.2157 2.39935 7.1707L2.40018 7.17154ZM14.8677 3.83154C16.2474 4.82531 17.2911 6.21641 17.8593 7.81904C15.8454 8.19163 14.0396 9.29391 12.7877 10.9149L12.6168 11.1449L11.1377 10.2907L14.8677 3.83237V3.83154ZM9.99935 2.26237C11.2202 2.26237 12.3793 2.52487 13.4243 2.9957L9.69435 9.45737L8.21518 8.60404C9.09867 6.64772 9.19153 4.42557 8.47435 2.40237C8.97726 2.30863 9.48778 2.26176 9.99935 2.26237ZM6.87185 2.8707C7.42577 4.36886 7.42282 6.01621 6.86352 7.51237L6.76352 7.76487L3.23518 5.72737C4.11871 4.50151 5.31786 3.53794 6.70518 2.93904L6.87185 2.86987V2.8707Z"
                      fill="black"
                    />
                  </svg>
                }
              >
                Sport
              </Button>

              <Button
                variant="text"
                sx={{ cursor: "pointer" }}
                startIcon={
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.416 8.92903L19.0827 18.0957H17.2868L16.286 15.5957H12.8777L11.8785 18.0957H10.0835L13.7493 8.92903H15.416ZM8.33268 2.26237V3.92903H13.3327V5.5957H11.6927C11.0499 7.53077 10.0239 9.31655 8.67602 10.8465C9.2771 11.3829 9.92908 11.8593 10.6227 12.269L9.99685 13.834C9.10145 13.3262 8.26401 12.7224 7.49935 12.0332C6.01067 13.3805 4.24772 14.3892 2.33185 14.9899L1.88518 13.3824C3.52671 12.859 5.03937 11.9951 6.32435 10.8474C5.37326 9.77065 4.58107 8.56342 3.97185 7.26237H5.83852C6.30297 8.11975 6.8599 8.9237 7.49935 9.65987C8.5411 8.45912 9.3621 7.08345 9.92435 5.59653L1.66602 5.5957V3.92903H6.66602V2.26237H8.33268ZM14.5827 11.3332L13.5435 13.929H15.6202L14.5827 11.3332Z"
                      fill="black"
                    />
                  </svg>
                }
              >
                Language
              </Button>
            </Grid>

            {/* Figmada pricedan oldingi logosi bor Musiqa Fan sport Language va h.k lar finish */}

            <Typography mt={2} variant="subtitle1" fontWeight="bold">
              Price:
            </Typography>
            <Grid container mt={2}>
              <Grid item xl={12} px={2}>
                <Box>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    color="success"
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                  />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="subtitle2">
                    {value[0] * 100000} so'm
                  </Typography>
                  <Typography variant="subtitle2">
                    {value[1] * 100000} so'm
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container mt={2}>
              <Grid item xl={12}>
                <FormControl>
                  <Typography my={2} variant="subtitle1" fontWeight="bold">
                    Masofa:
                  </Typography>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="1-km"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio />}
                      label="5-km"
                    />
                    <FormControlLabel
                      value="10"
                      control={<Radio />}
                      label="10-km"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Typography mt={2} variant="subtitle1" fontWeight="bold">
              Region:
            </Typography>
            <Grid container mt={2}>
              <Grid
                item
                py={1}
                sx={{
                  overflowY: "scroll",
                  height: 400,
                  width: "100%",
                  "&::-webkit-scrollbar": {
                    width: "0.3em",
                  },
                  "&::-webkit-scrollbar-track": {},
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(124, 194, 72, 1)",
                    borderRadius: "3px",
                  },
                }}
              >
                <List>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem sx={{ padding: 0 }}>
                        <ListItemButton
                          sx={{ paddingLeft: 0 }}
                          role={undefined}
                          color="primary"
                          onClick={handleToggle(value)}
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            sx={{ marginLeft: "-20px" }}
                            id={labelId}
                            primary={`Region ${value + 1}`}
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
            </Grid>
            <Typography mt={2} variant="subtitle1" fontWeight="bold">
              City:
            </Typography>
            <Grid container mt={2}>
              <Grid
                item
                xl={12}
                py={1}
                sx={{
                  overflowY: "scroll",
                  height: 400,
                  width: "100%",
                  "&::-webkit-scrollbar": {
                    width: "0.3em",
                  },
                  "&::-webkit-scrollbar-track": {},
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(124, 194, 72, 1)",
                    borderRadius: "3px",
                  },
                }}
              >
                <List>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem sx={{ padding: 0 }}>
                        <ListItemButton
                          sx={{ paddingLeft: 0 }}
                          role={undefined}
                          color="primary"
                          onClick={handleToggle(value)}
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            sx={{ marginLeft: "-20px" }}
                            id={labelId}
                            primary={`City ${value + 1}`}
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={8} md={8} sm={8} xs={12}>
            <Typography
              sx={{
                color: "black",
                fontSize: "24px",
                fontFamily: "Inter",
                fontWeight: 500,
                lineHeight: "30px",
                wordWrap: "break-word",
              }}
            >
              Academy
            </Typography>
            
            <Grid container spacing={2}>
              <Grid
                Grid
                item
                sx={{ marginTop: "50px"}}
                xl={6}
                md={6}
                sm={12}
                xs={12}
              >
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    border: "3px solid var(--border-base-surface, #FFF)",
                    background: "#F5F5F5",
                    boxShadow:
                      "0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)",
                    padding: "24px",
                    "&:hover": {
                    boxShadow: "0px 10px 10px -10px rgba(0,0,0,0.75)",
                    },
                  }}
                >
                  <Button
                    sx={{
                      marginLeft:'85%',
                      paddingBottom: "20px",
                    }}
                  >
                    <CloseIcon />
                  </Button>
                  <CardContent sx={{ padding: 0 }}>
                    <img
                      style={{ width: "100%" }}
                      src={images[2].imgPath}
                      alt=""
                    />
                  </CardContent>
                  <CardContent
                    sx={{
                      padding: 0,
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <Stack mt={1} direction="row" alignItems="center" gap={1}>
                      <Rating
                        name="read-only"
                        readOnly
                        value={rating}
                        sx={{
                          color: "rgba(254, 102, 69, 1)",
                          marginRight: {
                            xl: "85px",
                            md: "55px",
                            sm: "90px",
                            xs: "75px",
                          },
                          marginLeft: 0,
                        }}
                        size="medium"
                        precision={0.5}
                        onChange={(event, newRating) => {
                          setRating(newRating);
                        }}
                      />

                      <RemoveRedEyeIcon color="grey" fontSize="small" />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#707378",
                          fontSize: {
                            xl: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "12px",
                          },
                        }}
                      >
                        123 views
                      </Typography>
                    </Stack>
                  </CardContent>
                  <CardContent sx={{ padding: 0 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#000",
                        fontFamily: "Inter",
                        fontSize: {
                          xl: "20px",
                          md: "16px",
                          sm: "18px",
                          xs: "16px",
                        },
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "30px" /* 150% */,
                        letterSpacing: "-0.8px",
                        "--max-lines": 1,
                        overflow: "hidden",

                        display: "-webkit-box",
                        "-webkit-box-orient": "vertical",
                        "-webkit-line-clamp": "var(--max-lines)",
                      }}
                    >
                      Frontend
                    </Typography>
                    <Typography
                      sx={{
                        color: "var(--Grey-06, #707378)",
                        fontFamily: "Inter",
                        fontSize: {
                          xl: "18px",
                          md: "14px",
                          sm: "16px",
                          xs: "14px",
                        },
                        fontStyle: "normal",
                        fontWeight: 500,
                        marginTop: "8px",
                        lineHeight: "30px" /* 150% */,
                        letterSpacing: "-0.8px",
                        "--max-lines": 3,
                        overflow: "hidden",

                        display: "-webkit-box",
                        "-webkit-box-orient": "vertical",
                        "-webkit-line-clamp": "var(--max-lines)",
                      }}
                      variant="subtitle2"
                    >
                      Ushbu tizim 8-sinf o‘quvchilarining “Informatika va
                      axborot texnologiyalari” fanidan....
                    </Typography>
                  </CardContent>
                  <CardContent
                    orientation="horizontal"
                    sx={{
                      alignItems: "center",
                      mt: "38px",
                      position: "relative",
                      padding: 0,
                      paddingBottom: "8px !important",
                    }}
                  >
                    <Box sx={{ width: 0, display: "flex", gap: "8px" }}>
                      <IconButton
                        sx={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "10px",
                          border: "1px solid var(--Grey-02, #E2E3E6)",
                          background: "#FFF",
                        }}
                      >
                        <SendOutlined
                          sx={{ fontSize: "16px", color: "#000" }}
                        />
                      </IconButton>
                      <IconButton
                        sx={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "10px",
                          border: "1px solid var(--Grey-02, #E2E3E6)",
                          background: "#FFF",
                        }}
                      >
                        <FavoriteBorderIcon
                          sx={{ fontSize: "16px", color: "#000" }}
                        />
                      </IconButton>
                      <Button
                        onClick={() => detail()}
                        sx={{
                          position: "absolute",
                          right: 0,
                          top: { xl: -5, md: -1, sm: -3, xs: -1 },
                          height: { xl: 40, md: 32, sm: 40, xs: 32 },
                          borderRadius: "10px",
                          border: "1px solid var(--Grey-02, #E2E3E6)",
                          padding: {
                            xl: "8px 16px",
                            md: "6px 12px",
                            sm: "6px 12px",
                            xs: "6px 12px",
                          },
                          fontSize: {
                            xl: "16px",
                            md: "12px",
                            sm: "12px",
                            xs: "12px",
                          },
                          textTransform: "capitalize",
                          backgroundColor: "transparent",
                          letterSpacing: "-0.5px",
                          color: "black",
                          "&:hover": {
                            color: "#fff",
                          },
                        }}
                        color="success"
                        variant="contained"
                      >
                        Ko’proq ma’lumot
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                sx={{ marginTop: "50px" }}
                xl={6}
                md={6}
                sm={12}
                xs={12}
              >
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    border: "3px solid var(--border-base-surface, #FFF)",
                    background: "#F5F5F5",
                    boxShadow:
                      "0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)",
                    padding: "24px",
                    "&:hover": {
                      boxShadow: "0px 10px 10px -10px rgba(0,0,0,0.75)",
                    },
                  }}
                >
                  <CardContent sx={{ padding: 0 }}>
                  <Button
                    sx={{
                      marginLeft:'85%',
                      paddingBottom: "20px",
                    }}
                  >
                    <CloseIcon />
                  </Button>
                    <img
                      style={{ width: "100%" }}
                      src={images[2].imgPath}
                      alt=""
                    />
                  </CardContent>
                  <CardContent
                    sx={{
                      padding: 0,
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <Stack mt={1} direction="row" alignItems="center" gap={1}>
                      <Rating
                        name="read-only"
                        readOnly
                        value={rating}
                        sx={{
                          color: "rgba(254, 102, 69, 1)",
                          marginRight: {
                            xl: "85px",
                            md: "55px",
                            sm: "90px",
                            xs: "75px",
                          },
                          marginLeft: 0,
                        }}
                        size="medium"
                        precision={0.5}
                        onChange={(event, newRating) => {
                          setRating(newRating);
                        }}
                      />
                      <RemoveRedEyeIcon color="grey" fontSize="small" />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#707378",
                          fontSize: {
                            xl: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "12px",
                          },
                        }}
                      >
                        123 views
                      </Typography>
                    </Stack>
                  </CardContent>
                  <CardContent sx={{ padding: 0 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#000",
                        fontFamily: "Inter",
                        fontSize: {
                          xl: "20px",
                          md: "16px",
                          sm: "18px",
                          xs: "16px",
                        },
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "30px" /* 150% */,
                        letterSpacing: "-0.8px",
                        "--max-lines": 1,
                        overflow: "hidden",

                        display: "-webkit-box",
                        "-webkit-box-orient": "vertical",
                        "-webkit-line-clamp": "var(--max-lines)",
                      }}
                    >
                      Frontend
                    </Typography>
                    <Typography
                      sx={{
                        color: "var(--Grey-06, #707378)",
                        fontFamily: "Inter",
                        fontSize: {
                          xl: "18px",
                          md: "14px",
                          sm: "16px",
                          xs: "14px",
                        },
                        fontStyle: "normal",
                        fontWeight: 500,
                        marginTop: "8px",
                        lineHeight: "30px" /* 150% */,
                        letterSpacing: "-0.8px",
                        "--max-lines": 3,
                        overflow: "hidden",

                        display: "-webkit-box",
                        "-webkit-box-orient": "vertical",
                        "-webkit-line-clamp": "var(--max-lines)",
                      }}
                      variant="subtitle2"
                    >
                      Ushbu tizim 8-sinf o‘quvchilarining “Informatika va
                      axborot texnologiyalari” fanidan....
                    </Typography>
                  </CardContent>
                  <CardContent
                    orientation="horizontal"
                    sx={{
                      alignItems: "center",
                      mt: "38px",
                      position: "relative",
                      padding: 0,
                      paddingBottom: "8px !important",
                    }}
                  >
                    <Box sx={{ width: 0, display: "flex", gap: "8px" }}>
                      <IconButton
                        sx={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "10px",
                          border: "1px solid var(--Grey-02, #E2E3E6)",
                          background: "#FFF",
                        }}
                      >
                        <SendOutlined
                          sx={{ fontSize: "16px", color: "#000" }}
                        />
                      </IconButton>
                      <IconButton
                        sx={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "10px",
                          border: "1px solid var(--Grey-02, #E2E3E6)",
                          background: "#FFF",
                        }}
                      >
                        <FavoriteBorderIcon
                          sx={{ fontSize: "16px", color: "#000" }}
                        />
                      </IconButton>
                      <Button
                        onClick={() => detail()}
                        sx={{
                          position: "absolute",
                          right: 0,
                          top: { xl: -5, md: -1, sm: -3, xs: -1 },
                          height: { xl: 40, md: 32, sm: 40, xs: 32 },
                          borderRadius: "10px",
                          border: "1px solid var(--Grey-02, #E2E3E6)",
                          padding: {
                            xl: "8px 16px",
                            md: "6px 12px",
                            sm: "6px 12px",
                            xs: "6px 12px",
                          },
                          fontSize: {
                            xl: "16px",
                            md: "12px",
                            sm: "12px",
                            xs: "12px",
                          },
                          textTransform: "capitalize",
                          backgroundColor: "transparent",
                          letterSpacing: "-0.5px",
                          color: "black",
                          "&:hover": {
                            color: "#fff",
                          },
                        }}
                        color="success"
                        variant="contained"
                      >
                        Ko’proq ma’lumot
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                sx={{ marginTop: "50px" }}
                xl={6}
                md={6}
                sm={12}
                xs={12}
              >
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    border: "3px solid var(--border-base-surface, #FFF)",
                    background: "#F5F5F5",
                    boxShadow:
                      "0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)",
                    padding: "24px",
                    "&:hover": {
                      boxShadow: "0px 10px 10px -10px rgba(0,0,0,0.75)",
                    },
                  }}
                >
                  <CardContent sx={{ padding: 0 }}>
                  <Button
                    sx={{
                      marginLeft:'85%',
                      paddingBottom: "20px",
                    }}
                  >
                    <CloseIcon />
                  </Button>
                    <img
                      style={{ width: "100%" }}
                      src={images[2].imgPath}
                      alt=""
                    />
                  </CardContent>
                  <CardContent
                    sx={{
                      padding: 0,
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <Stack mt={1} direction="row" alignItems="center" gap={1}>
                      <Rating
                        name="read-only"
                        readOnly
                        value={rating}
                        sx={{
                          color: "rgba(254, 102, 69, 1)",
                          marginRight: {
                            xl: "85px",
                            md: "55px",
                            sm: "90px",
                            xs: "75px",
                          },
                          marginLeft: 0,
                        }}
                        size="medium"
                        precision={0.5}
                        onChange={(event, newRating) => {
                          setRating(newRating);
                        }}
                      />

                      <RemoveRedEyeIcon color="grey" fontSize="small" />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#707378",
                          fontSize: {
                            xl: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "12px",
                          },
                        }}
                      >
                        123 views
                      </Typography>
                    </Stack>
                  </CardContent>
                  <CardContent sx={{ padding: 0 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#000",
                        fontFamily: "Inter",
                        fontSize: {
                          xl: "20px",
                          md: "16px",
                          sm: "18px",
                          xs: "16px",
                        },
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "30px" /* 150% */,
                        letterSpacing: "-0.8px",
                        "--max-lines": 1,
                        overflow: "hidden",

                        display: "-webkit-box",
                        "-webkit-box-orient": "vertical",
                        "-webkit-line-clamp": "var(--max-lines)",
                      }}
                    >
                      Frontend
                    </Typography>
                    <Typography
                      sx={{
                        color: "var(--Grey-06, #707378)",
                        fontFamily: "Inter",
                        fontSize: {
                          xl: "18px",
                          md: "14px",
                          sm: "16px",
                          xs: "14px",
                        },
                        fontStyle: "normal",
                        fontWeight: 500,
                        marginTop: "8px",
                        lineHeight: "30px" /* 150% */,
                        letterSpacing: "-0.8px",
                        "--max-lines": 3,
                        overflow: "hidden",

                        display: "-webkit-box",
                        "-webkit-box-orient": "vertical",
                        "-webkit-line-clamp": "var(--max-lines)",
                      }}
                      variant="subtitle2"
                    >
                      Ushbu tizim 8-sinf o‘quvchilarining “Informatika va
                      axborot texnologiyalari” fanidan....
                    </Typography>
                  </CardContent>
                  <CardContent
                    orientation="horizontal"
                    sx={{
                      alignItems: "center",
                      mt: "38px",
                      position: "relative",
                      padding: 0,
                      paddingBottom: "8px !important",
                    }}
                  >
                    <Box sx={{ width: 0, display: "flex", gap: "8px" }}>
                      <IconButton
                        sx={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "10px",
                          border: "1px solid var(--Grey-02, #E2E3E6)",
                          background: "#FFF",
                        }}
                      >
                        <SendOutlined
                          sx={{ fontSize: "16px", color: "#000" }}
                        />
                      </IconButton>
                      <IconButton
                        sx={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "10px",
                          border: "1px solid var(--Grey-02, #E2E3E6)",
                          background: "#FFF",
                        }}
                      >
                        <FavoriteBorderIcon
                          sx={{ fontSize: "16px", color: "#000" }}
                        />
                      </IconButton>
                      <Button
                        onClick={() => detail()}
                        sx={{
                          position: "absolute",
                          right: 0,
                          top: { xl: -5, md: -1, sm: -3, xs: -1 },
                          height: { xl: 40, md: 32, sm: 40, xs: 32 },
                          borderRadius: "10px",
                          border: "1px solid var(--Grey-02, #E2E3E6)",
                          padding: {
                            xl: "8px 16px",
                            md: "6px 12px",
                            sm: "6px 12px",
                            xs: "6px 12px",
                          },
                          fontSize: {
                            xl: "16px",
                            md: "12px",
                            sm: "12px",
                            xs: "12px",
                          },
                          textTransform: "capitalize",
                          backgroundColor: "transparent",
                          letterSpacing: "-0.5px",
                          color: "black",
                          "&:hover": {
                            color: "#fff",
                          },
                        }}
                        color="success"
                        variant="contained"
                      >
                        Ko’proq ma’lumot
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                sx={{ marginTop: "50px" }}
                xl={6}
                md={6}
                sm={12}
                xs={12}
              >
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    border: "3px solid var(--border-base-surface, #FFF)",
                    background: "#F5F5F5",
                    boxShadow:
                      "0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)",
                    padding: "24px",
                    "&:hover": {
                      boxShadow: "0px 10px 10px -10px rgba(0,0,0,0.75)",
                    },
                  }}
                >
                  <CardContent sx={{ padding: 0 }}>
                  <Button
                    sx={{
                      marginLeft:'85%',
                      paddingBottom: "20px",
                    }}
                  >
                    <CloseIcon />
                  </Button>
                    <img
                      style={{ width: "100%" }}
                      src={images[2].imgPath}
                      alt=""
                    />
                  </CardContent>
                  <CardContent
                    sx={{
                      padding: 0,
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <Stack mt={1} direction="row" alignItems="center" gap={1}>
                      <Rating
                        name="read-only"
                        readOnly
                        value={rating}
                        sx={{
                          color: "rgba(254, 102, 69, 1)",
                          marginRight: {
                            xl: "85px",
                            md: "55px",
                            sm: "90px",
                            xs: "75px",
                          },
                          marginLeft: 0,
                        }}
                        size="medium"
                        precision={0.5}
                        onChange={(event, newRating) => {
                          setRating(newRating);
                        }}
                      />

                      <RemoveRedEyeIcon color="grey" fontSize="small" />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#707378",
                          fontSize: {
                            xl: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "12px",
                          },
                        }}
                      >
                        123 views
                      </Typography>
                    </Stack>
                  </CardContent>
                  <CardContent sx={{ padding: 0 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#000",
                        fontFamily: "Inter",
                        fontSize: {
                          xl: "20px",
                          md: "16px",
                          sm: "18px",
                          xs: "16px",
                        },
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "30px" /* 150% */,
                        letterSpacing: "-0.8px",
                        "--max-lines": 1,
                        overflow: "hidden",

                        display: "-webkit-box",
                        "-webkit-box-orient": "vertical",
                        "-webkit-line-clamp": "var(--max-lines)",
                      }}
                    >
                      Frontend
                    </Typography>
                    <Typography
                      sx={{
                        color: "var(--Grey-06, #707378)",
                        fontFamily: "Inter",
                        fontSize: {
                          xl: "18px",
                          md: "14px",
                          sm: "16px",
                          xs: "14px",
                        },
                        fontStyle: "normal",
                        fontWeight: 500,
                        marginTop: "8px",
                        lineHeight: "30px" /* 150% */,
                        letterSpacing: "-0.8px",
                        "--max-lines": 3,
                        overflow: "hidden",

                        display: "-webkit-box",
                        "-webkit-box-orient": "vertical",
                        "-webkit-line-clamp": "var(--max-lines)",
                      }}
                      variant="subtitle2"
                    >
                      Ushbu tizim 8-sinf o‘quvchilarining “Informatika va
                      axborot texnologiyalari” fanidan....
                    </Typography>
                  </CardContent>
                  <CardContent
                    orientation="horizontal"
                    sx={{
                      alignItems: "center",
                      mt: "38px",
                      position: "relative",
                      padding: 0,
                      paddingBottom: "8px !important",
                    }}
                  >
                    <Box sx={{ width: 0, display: "flex", gap: "8px" }}>
                      <IconButton
                        sx={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "10px",
                          border: "1px solid var(--Grey-02, #E2E3E6)",
                          background: "#FFF",
                        }}
                      >
                        <SendOutlined
                          sx={{ fontSize: "16px", color: "#000" }}
                        />
                      </IconButton>
                      <IconButton
                        sx={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "10px",
                          border: "1px solid var(--Grey-02, #E2E3E6)",
                          background: "#FFF",
                        }}
                      >
                        <FavoriteBorderIcon
                          sx={{ fontSize: "16px", color: "#000" }}
                        />
                      </IconButton>
                      <Button
                        onClick={() => detail()}
                        sx={{
                          position: "absolute",
                          right: 0,
                          top: { xl: -5, md: -1, sm: -3, xs: -1 },
                          height: { xl: 40, md: 32, sm: 40, xs: 32 },
                          borderRadius: "10px",
                          border: "1px solid var(--Grey-02, #E2E3E6)",
                          padding: {
                            xl: "8px 16px",
                            md: "6px 12px",
                            sm: "6px 12px",
                            xs: "6px 12px",
                          },
                          fontSize: {
                            xl: "16px",
                            md: "12px",
                            sm: "12px",
                            xs: "12px",
                          },
                          textTransform: "capitalize",
                          backgroundColor: "transparent",
                          letterSpacing: "-0.5px",
                          color: "black",
                          "&:hover": {
                            color: "#fff",
                          },
                        }}
                        color="success"
                        variant="contained"
                      >
                        Ko’proq ma’lumot
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Stack mt={5}>
          <Pagination sx={{ margin: "0 auto" }} count={10} color="primary" />
        </Stack>
        <Typography mt={5} variant="body1" fontWeight="bold">
          Apply to all
        </Typography>
        <Box mt={2}>
          <FormControl>
            <FormGroup>
              <TextField
                margin="normal"
                sx={{
                  width: { xl: "400px", md: "350px", sm: "300px", xs: "300px" },
                }}
                required
                color="primary"
                id="first-name"
                label="First Name"
                name="first-name"
                autoComplete="first-name"
              />
            </FormGroup>
            <FormGroup>
              <TextField
                margin="normal"
                sx={{
                  width: { xl: "400px", md: "350px", sm: "300px", xs: "300px" },
                }}
                required
                color="primary"
                id="last-name"
                label="Last Name"
                name="last-name"
              />
            </FormGroup>
            <FormGroup>
              <TextField
                margin="normal"
                sx={{
                  width: { xl: "400px", md: "350px", sm: "300px", xs: "300px" },
                }}
                required
                color="primary"
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="phone"
              />
            </FormGroup>
          </FormControl>
          <Box>
            <Button
              type="button"
              color="primary"
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              Apply to all
            </Button>
          </Box>
        </Box>
        <UniversityApplication />
      </Stack>
    </Container>
  );
}

const navLinkStyle = {
  color: "#072556",
  textDecoration: "none",
  marginLeft: "-20px",
};

export default Application;
