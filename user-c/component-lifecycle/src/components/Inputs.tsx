import { TextField, Grid, MenuItem, Avatar } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import {BiMale, BiFemale} from "react-icons/bi";
const selectOption = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];


const Input = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<string>("");
  const [image, setImage] = useState<string>("/assets/boy.jpg");
  const [profile, setProfile] = useState<string>("");
  const [icon, setIcon] = useState("");

  const setPhoto = () => {
    age<=6
      ?setImage("/assets/small-baby.jpeg")
      :age>6 && age <= 20
      ? setImage("/assets/boy.jpg")
      : age <= 30 && age>20
      ? setImage("/assets/adult.jpg")
      : age >30 && age<60
      ? setImage("/assets/male.jpg")
      : setImage("/assets/old.jpg");
    gender.includes("Male")
      ? setProfile("/assets/male.jpg")
      : gender.includes("Female")
      ? setProfile("/assets/women.jpg")
      : setProfile("");
  }

  useEffect(() => {
    setPhoto();
  }, [age, gender]);

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    parseInt(event.target.value) < 0
      ? setAge(0)
      : setAge(parseInt(event.target.value));
  };
 

  return (
    
    <>
      <Grid
        container
        sx={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          alignContent: "center",
          gap: "75px",

        '& > :not(style)': { m: 1, width: '25ch' },
        }}
      >
        <Grid item>
          <TextField
      
            label="Name"
            variant="filled"
            color="success"
            value={name}
            onChange={handleName}
          />
        </Grid>
        {name.length > 1 ? (
          <>
            <Grid item>
              <TextField
                label="Age"
                variant="filled"
                type="number"
                color="success"
                InputProps={{ inputProps: { min: 0 } }}
                onChange={handleAge}
              />
              <br></br>
              {age ? (
                <img
                  src={image}
                  alt="child"
                  style={{ width: "200px", height: "500px", marginTop: "20px" }}
                />
              ) : null}
            </Grid>
            <Grid item>
              <TextField
                label="Gender"
                variant="filled"
                color="success"
                select
                value={gender}
                onChange={handleSelect}
                sx={{
                  width: "210px",

                  display: "flex"
                }}
              >
                {selectOption.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <br></br>
              {gender ? (
                <img
                  src={profile}
                  alt="profile"
                  style={{ width: "55px", height: "70px",marginTop:"0px"}}
                />
              ) : null}
              <br></br >
              <br></br>
              <br></br>
              <br></br>
                <Formik
                initialValues={{
                    picked: ""
                }}
                onSubmit={async (values) => {
                    setIcon(values.picked);
                }}
            >
                {({ values }) => (
                    <Form>
                        <div id="my-radio-group">Choose Your Gender Alternative</div>
                        <div role="group" aria-labelledby="my-radio-group">
                            <label>
                                <Field type="radio" name="picked" value="Male" />
                                <BiMale />
                            </label>
                            <label>
                                <Field type="radio" name="picked" value="Female" />
                                <BiFemale />
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
            choosen gender is :{icon}
            </Grid>

          </>
        ) : null}
      </Grid>
      
    </>
  );
  
};

export default Input;
