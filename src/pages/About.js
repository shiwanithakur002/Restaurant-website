import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My kitchen</Typography>
        <p>
        <h4>First of all I Welcome to all of you with warm HEART and FEELINGS.<br></br>I'm grateful that you all come in my and your kitchen .</h4>
        My Kitchen specializes in delicious food featuring fresh ingredients and masterful preparation by the My Kitchen culinary team. Whether you’re ordering a multi-course meal or grabbing a drink and dosa, My Kitchen lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.
        </p>
        <br />
        <p>
        <h5>MY KITCHEN </h5>combines flavors & inspiration from the Far East & the West to create what we think is the best! Home to the original recipe, we specialize in chole bhature, as well as handmade appetizers, dosa, salads, and gujarati food, vegetarian, & vegan selections. Feel free to indulge lassi with our fantastic unique cuisine. Cheers!
        </p>
        <br></br>
        <p>
        My Kitchen offers menus for Lunch and Dinner. The restaurant has a Latin atmosphere with Latin Indian ornaments and music. Within a year of its opening, My Kitchen has been recognised for its quality of food and excellent service.
        </p>
        <br></br>
        <p>
        रसोई घर में खाना बनाना मेरी आत्मा और मेरी जिंदगी है, और मैं इसे बेहद प्यार करता हूं ।
        </p>
        <br></br>
        <p>
       <h4> एक आदमी के दिल का रास्ता उसके पेट से होता है</h4>
        </p>
      </Box>
    </Layout>
  );
};

export default About;
