'use client'
import { Group as GroupIcon, Message, Person as PersonIcon } from "@mui/icons-material";
import { Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Line,Doughnut } from "react-chartjs-2";
import {Chart as ChartJS,Tooltip,CategoryScale,Filler,LinearScale,PointElement,LineElement,ArcElement,Legend} from "chart.js";


ChartJS.register(CategoryScale,Filler,LinearScale,PointElement,LineElement,ArcElement,Legend,Tooltip);

const charts = () => {

const lineChartOptions={
    responsive:true,
    plugins:{
        legend:{
            display:false,
        },
        title:{
            display:false,
        },
    },
    scales:{
        x:{
            grid:{
                display:false,
            }
        },
        y:{
            grid:{
                display:false,
            }
        }
    }
}



const LineChart=({value=[]})=>{
    const data={
        labels:['January', 'February', 'March', 'April', 'May', 'June'],
        datasets:[{
            data:value,
            label:"Revenue",
            fill:true,
            backgroundColor:'rgba(155,215,145,255)',
            borderColor:"rgba(75,192,92,1)"
        }]
    }
    return <><Line data={data} options={lineChartOptions}/>
    </>
}

const DougnutChart = ({value=[],labels=[]})=>{
    const data={
        labels,
        datasets:[{
            data:value,
        
            
            backgroundColor:['green','pink'],
            borderColor:"rgba(75,192,92,1)",
            offset:35
        }]
    }
    return <Doughnut data={data} />
};

  return (
    <Container>
      <Stack direction={{sm:'row',}} spacing={'1rem'}  >
        <Paper
          elevation={3}
          width="100%"
          sx={{ padding: "2rem 3.5rem", margin: "2rem 0", borderRadius: "1rem",  maxwidth:'40rem' ,    width:'80%',}}
        
        >
          <Typography>Last Message</Typography>
          <LineChart value={[56,40,24,80,56,60]}/>
          </Paper>





          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
             
            
              
             
            }}
          >
        
        <DougnutChart value={[62,45]} labels={['single','Group']}/>
            <Stack
              position={"absolute"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={"0.5rem"}
              width={"100%"}
             
            >

                
              <GroupIcon />
              <Typography>Vs</Typography>
              <PersonIcon /> 
            </Stack>
         
        </Paper>
      </Stack>
    
     
    </Container>
  );
};

export default charts;
