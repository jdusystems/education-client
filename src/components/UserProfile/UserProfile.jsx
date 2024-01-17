import {
  Grid,
  Stack,
  Rating,
  Box,
  Typography,
  FormControl,
  Avatar,
  FormGroup,
  TextField,
  Button,
  Container,
} from "@mui/material";
import ImgFileIcon from "../Assets/img/free-image-file.webp";
import React from "react";
import { useState, useRef } from "react";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import resentChanges from "../Assets/img/changes.png";

function UserProfile() {
  const [fullName, setFullName] = useState("");
  const [changes, setChanges] = useState(1);
  const [fileList, setFileList] = useState(null);
  const [value, setValue] = React.useState(4.5);
  const wrapperRef = useRef(null);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    setFileList(e.target.files[0]);
  };

  const fileRemove = (file) => {
    setFileList(null);
  };
  return (
    <Container>
      <Stack>
        <Typography my={3} variant="h6" color="primary" fontWeight="bold">
          Profile
        </Typography>
        <Grid container mt={0.1} spacing={4}>
          <Grid item xl={4}  >
            <Typography mb={3} variant="subtitle1" fontWeight="bold" >
              Edit Profile Img...
            </Typography>
            <Stack mt={4}  alignItems={{xl:'flex-start', md:'flex-start', sm:'center', xs:'center'}}>
              <DropFileInput
                style={{ borderRadius: "100%" }}
                ref={wrapperRef}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
              >
                <DropFileInputLabel>
                  <img
                    src="https://picsum.photos/2300/2300"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "100%",
                    }}
                    alt="Upload"
                  />
                </DropFileInputLabel>
                {/* <input
                  style={dropFileInput}
                  multiple
                  type="file"
                  value=""
                  onChange={onFileDrop}
                /> */}
              </DropFileInput>
              <Grid mt={3}  
                  container
                  direction="row"
                  pl={{xl:'0%', md:'20%', sm:'38%', xs:'25%'}}>
                <Button variant="outlined" sx={{margin:'5px'}} startIcon={<CameraAltOutlinedIcon />}
                ref={wrapperRef}
                onDragEnter={onDragEnter}>
                <input
                style={dropFileInput}
                multiple
                type="file"
                value=""
                onChange={onFileDrop}/>
                Upload</Button>
              <Button variant="outlined" sx={{margin:'5px'}}><DropFilePreviewItemDel onClick={() => fileRemove(0)}>
              <DeleteOutlinedIcon/> 
                    </DropFilePreviewItemDel></Button>
              </Grid>
              {fileList !== null ? (
                <Box mt={3}>
                  <Typography variant="subtitle2" fontWeight={500}>
                    Ready to Upload
                  </Typography>
                  <DropFilePreviewItem>
                    <img
                      style={{ width: "90px", marginRight: "20px" }}
                      src={ImgFileIcon}
                      alt="Logo"
                    />
                    <DropFilePreviewItemInfo>
                      <p>Name: {fileList.name}</p>
                      <p>Size: {fileList.size} B</p>
                    </DropFilePreviewItemInfo>
                  
                  </DropFilePreviewItem>
                </Box>
              ) : null}
            </Stack>
            <Stack mt={3}>
              <Typography variant="subtitle1" fontWeight="bold">
                Edit Full Name...
              </Typography>
              <FormControl>
                <FormGroup>
                  <TextField
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    helperText="Please enter fullName"
                    color="primary"
                    label="FullName"
                    required
                    margin="normal"
                  />
                </FormGroup>
              </FormControl>
            </Stack>
            <Button
              color="success"
              sx={{ marginTop: "2.1rem" }}
              variant="contained"
            >
              Edit Personal Information
            </Button>
          </Grid>
          <Grid item xl={8}>
            <Typography
              marginBottom="59px"
              variant="subtitle1"
              fontWeight="bold"
            >
              Reset Changes...
            </Typography>
            {changes === null ? (
              <Stack mt={6}>
                <img
                  width="20%"
                  style={{ margin: "0 auto" }}
                  src={resentChanges}
                  alt="Reset changes"
                />
              </Stack>
            ) : (
              <Stack>
                <Grid
                  container
                  pb={1}
                  borderBottom={2}
                  borderColor="rgba(124, 194, 72, 1)"
                  spacing={4}
                >
                  <Grid item xl={4}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "black",
                        fontSize: {
                          xl: "24px",
                          md: "20px",
                          sm: "18px",
                          xs: "16px",
                        },
                        display: {
                          xl: "block",
                          md: "block",
                          sm: "none",
                          xs: "none",
                        },
                        fontFamily: "Inter",
                        fontWeight: 500,
                        lineHeight: "30px",
                        wordWrap: "break-word",
                      }}
                      fontWeight="bold"
                    >
                      Academy Name:
                    </Typography>
                  </Grid>
                  <Grid item xl={4}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: "black",
                        fontSize: {
                          xl: "24px",
                          md: "20px",
                          sm: "18px",
                          xs: "16px",
                        },
                        display: {
                          xl: "block",
                          md: "block",
                          sm: "none",
                          xs: "none",
                        },
                        fontFamily: "Inter",
                        fontWeight: 500,
                        lineHeight: "30px",
                        wordWrap: "break-word",
                        paddingLeft: { xl: 0, md: "50px", sm: 0, xs: 0 },
                        paddingRight: { xl: 0, md: "210px", sm: 0, xs: 0 },
                      }}
                    >
                      Advertising:
                    </Typography>
                  </Grid>
                  <Grid item xl={4}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: "black",
                        fontSize: {
                          xl: "24px",
                          md: "20px",
                          sm: "18px",
                          xs: "16px",
                        },
                        display: {
                          xl: "block",
                          md: "block",
                          sm: "none",
                          xs: "none",
                        },
                        fontFamily: "Inter",
                        fontWeight: 500,
                        lineHeight: "30px",
                        wordWrap: "break-word",
                      }}
                    >
                      Actions:
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  mt={2}
                  container
                  spacing={4}
                  alignItems={{
                    xl: "center",
                    md: "center",
                    sm: "left",
                    xs: "left",
                  }}
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xl: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    },
                  }}
                >
                  <Grid
                    item
                    xl={4}
                    sx={{
                      display: "flex",
                      flexDirection: {
                        xl: "row",
                        md: "row",
                        sm: "column",
                        xs: "column",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: {
                          xl: "row",
                          md: "row",
                          sm: "column",
                          xs: "column",
                        },
                        justifyContent: "flex-start",
                        alignItems: {
                          xl: "center",
                          md: "center",
                          sm: "left",
                          xs: "left",
                        },
                        gap: "0.5rem",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "black",
                          fontSize: {
                            xl: "24px",
                            md: "20px",
                            sm: "18px",
                            xs: "16px",
                          },
                          display: {
                            xl: "none",
                            md: "none",
                            sm: "block",
                            xs: "block",
                          },
                          fontFamily: "Inter",
                          fontWeight: 500,
                          lineHeight: "30px",
                          wordWrap: "break-word",
                        }}
                        fontWeight="bold"
                      >
                        Academy Name:
                      </Typography>

                      <Avatar
                        size="small"
                        src="https://picsum.photos/2000/2000"
                        sx={{
                          border: "2px solid",
                          borderColor: "rgba(124, 194, 72, 1)",
                        }}
                      />
                      <Typography
                        sx={{ cursor: "pointer" }}
                        variant="subtitle1"
                        fontSize={14}
                        fontWeight="bold"
                      >
                        Lorem, ipsum dolor.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xl={4}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: "black",
                        fontSize: {
                          xl: "24px",
                          md: "20px",
                          sm: "18px",
                          xs: "16px",
                        },
                        display: {
                          xl: "none",
                          md: "none",
                          sm: "block",
                          xs: "block",
                        },
                        fontFamily: "Inter",
                        fontWeight: 500,
                        lineHeight: "30px",
                        wordWrap: "break-word",
                      }}
                    >
                      Advertising:
                    </Typography>
                    <Typography
                      sx={{ cursor: "pointer" }}
                      variant="subtitle1"
                      fontSize={14}
                      fontWeight="bold"
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </Typography>
                  </Grid>
                  <Grid item xl={4}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: "black",
                        fontSize: {
                          xl: "24px",
                          md: "20px",
                          sm: "18px",
                          xs: "16px",
                        },
                        display: {
                          xl: "none",
                          md: "none",
                          sm: "block",
                          xs: "block",
                        },
                        fontFamily: "Inter",
                        fontWeight: 500,
                        lineHeight: "30px",
                        wordWrap: "break-word",
                      }}
                    >
                      Actions:
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Comment:
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  mt={2}
                  container
                  spacing={4}
                  alignItems={{
                    xl: "center",
                    md: "center",
                    sm: "left",
                    xs: "left",
                  }}
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xl: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    },
                  }}
                >
                  <Grid item xl={4}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: {
                          xl: "row",
                          md: "row",
                          sm: "column",
                          xs: "column",
                        },
                        justifyContent: "flex-start",
                        alignItems: {
                          xl: "center",
                          md: "center",
                          sm: "left",
                          xs: "left",
                        },
                        gap: "0.5rem",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "black",
                          fontSize: {
                            xl: "24px",
                            md: "20px",
                            sm: "18px",
                            xs: "16px",
                          },
                          display: {
                            xl: "none",
                            md: "none",
                            sm: "block",
                            xs: "block",
                          },
                          fontFamily: "Inter",
                          fontWeight: 500,
                          lineHeight: "30px",
                          wordWrap: "break-word",
                        }}
                        fontWeight="bold"
                      >
                        Academy Name:
                      </Typography>
                      <Avatar
                        size="small"
                        src="https://picsum.photos/2000/2000"
                        sx={{
                          border: "2px solid",
                          borderColor: "rgba(124, 194, 72, 1)",
                        }}
                      />
                      <Typography
                        sx={{ cursor: "pointer" }}
                        variant="subtitle1"
                        fontSize={14}
                        fontWeight="bold"
                      >
                        Lorem, ipsum dolor.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xl={4}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: "black",
                        fontSize: {
                          xl: "24px",
                          md: "20px",
                          sm: "18px",
                          xs: "16px",
                        },
                        display: {
                          xl: "none",
                          md: "none",
                          sm: "block",
                          xs: "block",
                        },
                        fontFamily: "Inter",

                        fontWeight: 500,
                        lineHeight: "30px",
                        wordWrap: "break-word",
                      }}
                    >
                      Advertising:
                    </Typography>
                    <Typography
                      sx={{ cursor: "pointer" }}
                      variant="subtitle1"
                      fontSize={14}
                      fontWeight="bold"
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </Typography>
                  </Grid>
                  <Grid item xl={4}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: "black",
                        fontSize: {
                          xl: "24px",
                          md: "20px",
                          sm: "18px",
                          xs: "16px",
                        },
                        display: {
                          xl: "none",
                          md: "none",
                          sm: "block",
                          xs: "block",
                        },
                        fontFamily: "Inter",
                        fontWeight: 500,
                        lineHeight: "30px",
                        wordWrap: "break-word",
                      }}
                    >
                      Actions:
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Application:
                    </Typography>
                    <Stack direction="row" alignItems="center" gap={1}>
                      <AccessTimeIcon fontSize="small" />
                      <Typography variant="body2">13:48 22.11.2023</Typography>
                    </Stack>
                  </Grid>
                </Grid>
                <Grid
                  mt={2}
                  container
                  spacing={4}
                  alignItems={{
                    xl: "center",
                    md: "center",
                    sm: "left",
                    xs: "left",
                  }}
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xl: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    },
                  }}
                >
                  <Grid item xl={4}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: {
                          xl: "row",
                          md: "row",
                          sm: "column",
                          xs: "column",
                        },
                        justifyContent: "flex-start",
                        alignItems: {
                          xl: "center",
                          md: "center",
                          sm: "left",
                          xs: "left",
                        },
                        gap: "0.5rem",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "black",
                          fontSize: {
                            xl: "24px",
                            md: "20px",
                            sm: "18px",
                            xs: "16px",
                          },
                          display: {
                            xl: "none",
                            md: "none",
                            sm: "block",
                            xs: "block",
                          },
                          fontFamily: "Inter",
                          fontWeight: 500,
                          lineHeight: "30px",
                          wordWrap: "break-word",
                        }}
                        fontWeight="bold"
                      >
                        Academy Name:
                      </Typography>
                      <Avatar
                        size="small"
                        src="https://picsum.photos/2000/2000"
                        sx={{
                          border: "2px solid",
                          borderColor: "rgba(124, 194, 72, 1)",
                        }}
                      />
                      <Typography
                        sx={{ cursor: "pointer" }}
                        variant="subtitle1"
                        fontSize={14}
                        fontWeight="bold"
                      >
                        Lorem, ipsum dolor.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xl={4}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: "black",
                        fontSize: {
                          xl: "24px",
                          md: "20px",
                          sm: "18px",
                          xs: "16px",
                        },
                        display: {
                          xl: "none",
                          md: "none",
                          sm: "block",
                          xs: "block",
                        },
                        fontFamily: "Inter",
                        fontWeight: 500,
                        lineHeight: "30px",
                        wordWrap: "break-word",
                      }}
                    >
                      Advertising:
                    </Typography>
                    <Typography
                      sx={{ cursor: "pointer" }}
                      variant="subtitle1"
                      fontSize={14}
                      fontWeight="bold"
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </Typography>
                  </Grid>
                  <Grid item xl={4}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: "black",
                        fontSize: {
                          xl: "24px",
                          md: "20px",
                          sm: "18px",
                          xs: "16px",
                        },
                        display: {
                          xl: "none",
                          md: "none",
                          sm: "block",
                          xs: "block",
                        },
                        fontFamily: "Inter",
                        fontWeight: 500,
                        lineHeight: "30px",
                        wordWrap: "break-word",
                      }}
                    >
                      Actions:
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Rating:
                    </Typography>
                    <Rating
                      name="read-only"
                      readOnly
                      value={value}
                      sx={{
                        color: "rgba(254, 102, 69, 1)",
                      }}
                      size="large"
                      precision={0.5}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Grid>
                </Grid>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}

const DropFileInput = styled.div`
  position: relative;
  width: 60%;
  height: auto;
  border: 2px dashed #bc002d;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #07255681;
  &:hover,
  &.dragover {
    opacity: 0.6;
  }
`;

const DropFileInputLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropFilePreviewItem = styled.div`
  position: relative;
  display: flex;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  background-color: #07255681;
  &:hover {
    box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.75);
  }
`;
const DropFilePreviewItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
`;
const DropFilePreviewItemDel = styled.span`
  /* background-color: #ee3d3d;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer; */
  /* opacity: 0.5;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  } */
`;

const dropFileInput = {
  opacity: 0,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  cursor: "pointer",
};

export default UserProfile;
