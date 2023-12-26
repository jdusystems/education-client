import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField, MenuItem, FormControl, FormGroup, Grid, } from '@mui/material';
import { MuiFileInput } from 'mui-file-input';

const steps = ['Passport malumotlari.', 'Umumiy malumotlar', 'Xujjatlar'];

export default function UniversityApplication() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [academy, setAcademy] = React.useState('');
  const [file, setFile] = React.useState(null);

  const handleChange = (newFile) => {
    setFile(newFile)
  }

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box mt={4} sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {
                activeStep + 1 === 1 ? 
                <>
                  <Box my={4}>
                  <Grid container spacing={3}>
                    <Grid item xl={6}>
                        <FormControl>
                        <FormGroup>
                      <TextField
                        margin="normal"
                        sx={{width: '400px'}}
                        required
                        color='primary'
                        id="first-name"
                        label="First Name"
                        name="first-name"
                        helperText="Please select First Name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <TextField
                        margin="normal"
                        sx={{width: '400px'}}
                        required
                        color='primary'
                        id="last-name"
                        label="Last Name"
                        name="last-name"
                        helperText="Please select Last Name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <TextField
                        margin="normal"
                        sx={{width: '400px'}}
                        required
                        color='primary'
                        id="father-name"
                        label="Father Name"
                        name="father-name"
                        helperText="Please select Father Name"
                      />
                    </FormGroup>
                    </FormControl>
                    </Grid>
                    <Grid item xl={6}>
                        <FormControl fullWidth>
                    <FormGroup> 
                      <TextField
                        id="outlined-select-currency"
                        select
                        margin="normal"
                        value={academy}
                        onChange={(e) => {setAcademy(e.target.value)}}
                        color='primary'
                        label="Gander"
                        helperText="Please select Gander">
                            <MenuItem  value="O'quv Markaz">
                                O'quv Markaz
                            </MenuItem>
                            <MenuItem  value="Universitet">
                                Universitet
                            </MenuItem>
                            <MenuItem  value="Maktab">
                                Maktab
                            </MenuItem>
                            <MenuItem  value="Maktabgacha Talim">
                                Maktabgacha Talim
                            </MenuItem>
                      </TextField>
                    </FormGroup>
                    <FormGroup> 
                      <TextField
                        id="outlined-select-currency"
                        select
                        margin="normal"
                        value={academy}
                        onChange={(e) => {setAcademy(e.target.value)}}
                        color='primary'
                        label="Nationality"
                        helperText="Please select Nationality">
                            <MenuItem  value="O'quv Markaz">
                                O'quv Markaz
                            </MenuItem>
                            <MenuItem  value="Universitet">
                                Universitet
                            </MenuItem>
                            <MenuItem  value="Maktab">
                                Maktab
                            </MenuItem>
                            <MenuItem  value="Maktabgacha Talim">
                                Maktabgacha Talim
                            </MenuItem>
                      </TextField>
                    </FormGroup>
                        </FormControl>
                    </Grid>
                  </Grid>
                </Box>
                </> 
                : activeStep + 1 === 2 ? 
                <>
                <Box mt={2}>
                  <Grid container spacing={3}>
                  <Grid item xl={6}>
                        <FormControl>
                        <FormGroup>
                      <TextField
                        margin="normal"
                        sx={{width: '400px'}}
                        required
                        color='primary'
                        id="email"
                        label="Email"
                        name="email"
                        helperText="Please select Email"
                      />
                    </FormGroup>
                    <FormGroup>
                      <TextField
                        margin="normal"
                        sx={{width: '400px'}}
                        required
                        color='primary'
                        id="phone"
                        label="Phone"
                        name="phone"
                        helperText="Please select Phone"
                      />
                    </FormGroup>
                    <FormGroup> 
                      <TextField
                        id="outlined-select-currency"
                        select
                        margin="normal"
                        value={academy}
                        onChange={(e) => {setAcademy(e.target.value)}}
                        color='primary'
                        label="Region"
                        helperText="Please select Region">
                            <MenuItem  value="O'quv Markaz">
                                O'quv Markaz
                            </MenuItem>
                            <MenuItem  value="Universitet">
                                Universitet
                            </MenuItem>
                            <MenuItem  value="Maktab">
                                Maktab
                            </MenuItem>
                            <MenuItem  value="Maktabgacha Talim">
                                Maktabgacha Talim
                            </MenuItem>
                      </TextField>
                    </FormGroup>
                    <FormGroup>
                      <TextField
                        margin="normal"
                        sx={{width: '400px'}}
                        required
                        color='primary'
                        id="address"
                        helperText="Please select Address"
                        label="Address"
                        name="address"
                      />
                    </FormGroup> 
                        </FormControl>
                    </Grid>
                    <Grid item xl={6}>
                        <FormControl>
                        <FormGroup>
                      <TextField
                        margin="normal"
                        sx={{width: '400px'}}
                        required
                        color='primary'
                        id="age"
                        label="Age"
                        name="age"
                        helperText="Please select Age"
                      />
                    </FormGroup> 
                    
                    <FormGroup>
                      <TextField
                        margin="normal"
                        sx={{width: '400px'}}
                        required
                        color='primary'
                        id="last-academy"
                        helperText="Please select Last Academy"
                        label="The last completed general secondary or secondary special educational institution"
                        name="last-academy"
                      />
                    </FormGroup>
                    <FormGroup>
                      <TextField
                        margin="normal"
                        sx={{width: '400px'}}
                        required
                        color='primary'
                        id="direction"
                        label="Direction"
                        name="direction"
                        helperText="Please select Direction"
                      />
                    </FormGroup>
                        </FormControl>
                    </Grid>
                    
                  </Grid>
                </Box>
                </> 
                : 
                <>
                <Box>
                  <Grid container>
                    <Grid item>
                      <FormControl sx={{marginTop: 4}} fullWidth>
                        <FormGroup>
                          <Typography>Shaxsni tasdiqlovchi hujjat (pasport yoki ID karta)ning nusxasini kiriting</Typography>
                          <MuiFileInput color='primary' helperText='Enter your file' margin='normal' value={file} onChange={handleChange} />
                        </FormGroup>
                      </FormControl>
                      <FormControl sx={{marginTop: 4}} fullWidth>
                        <FormGroup>
                          <Typography>Ingliz tili bilim darajasini tasdiqlovchi sertifikatni kiriting (agar mavjud bolsa)*</Typography>
                          <MuiFileInput color='primary' helperText='Enter your file' margin='normal' value={file} onChange={handleChange} />
                        </FormGroup>
                      </FormControl>
                      <FormControl sx={{marginTop: 4}} fullWidth>
                        <FormGroup>
                          <Typography>Shahodatnoma(yoki litsey, kollej diplomi) va baholar kiritilgan ilovani kiriting. 2024-yil bitiruvchi sinf oquvchilari 9-sinf shahodatnomasi va uning ilovasini kiriting*</Typography>
                          <MuiFileInput color='primary' helperText='Enter your file' margin='normal' value={file} onChange={handleChange} />
                        </FormGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>
                </> 
            }
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                variant='contained'
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} variant='contained' sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button variant='contained' color='danger'>
                    Apply to all
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
      );
}