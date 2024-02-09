import { Box, Card, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "./styles.css";
import CardContnt from "./CardContnt";
import Filter from "./Filter";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [documents, setDocuments] = useState([]);
  const [filteredDocuments, setFilteredDocuments] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:3000/dashboard");
      setIsFetching(false);
      setDocuments(data.data);
      setFilteredDocuments(data.data);
    };
    fetchData();
  }, []);
  if (isFetching)
    return (
      <>
        <div className="loader">
          <CircularProgress />
        </div>
      </>
    );
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: "1.5rem" }}>
        <div className="filter-container">
          <Filter
            documents={documents}
            setFilteredDocuments={setFilteredDocuments}
          />
        </div>
        <Grid container spacing={2}>
          <Grid xs={12} md={5}>
            <Card variant="outlined" sx={{ borderRadius: "5px" }}>
              <CardContnt
                heading="intensity"
                chartType="bar"
                documents={filteredDocuments}
              />
            </Card>
          </Grid>
          <Grid xs={12} md={7}>
            <Card variant="outlined" sx={{ borderRadius: "5px" }}>
              <CardContnt
                heading="country"
                chartType="line"
                documents={filteredDocuments}
              />
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card variant="outlined" sx={{ borderRadius: "5px" }}>
              <CardContnt
                heading="relevance"
                chartType="doughnut"
                documents={filteredDocuments}
              />
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card variant="outlined" sx={{ borderRadius: "5px" }}>
              <CardContnt
                heading="region"
                chartType="bar"
                documents={filteredDocuments}
              />
            </Card>
          </Grid>
          <Grid xs={12}>
            <Card variant="outlined" sx={{ borderRadius: "5px" }}>
              <CardContnt
                heading="topic"
                chartType="line"
                documents={filteredDocuments}
              />
            </Card>
          </Grid>
          <Grid xs={12} md={8}>
            <Card variant="outlined" sx={{ borderRadius: "5px" }}>
              <CardContnt
                heading="likelihood"
                chartType="pie"
                documents={filteredDocuments}
              />
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card variant="outlined" sx={{ borderRadius: "5px" }}>
              <CardContnt
                heading="start_year"
                chartType="scatter"
                documents={filteredDocuments}
              />
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card variant="outlined" sx={{ borderRadius: "5px" }}>
              <CardContnt
                heading="impact"
                chartType="radar"
                documents={filteredDocuments}
              />
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card variant="outlined" sx={{ borderRadius: "5px" }}>
              <CardContnt
                heading="city"
                chartType="line"
                documents={filteredDocuments}
              />
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card variant="outlined" sx={{ borderRadius: "5px" }}>
              <CardContnt
                heading="pestle"
                chartType="polarArea"
                documents={filteredDocuments}
              />
            </Card>
          </Grid>
          <Grid xs={12}>
            <Card variant="outlined" sx={{ borderRadius: "5px" }}>
              <CardContnt
                heading="end_year"
                chartType="doughnut"
                documents={filteredDocuments}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
