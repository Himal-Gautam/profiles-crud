import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import CardView from "../Views/CardView";
import GridView from "../Views/GridView";
import { Container, TextField } from "@mui/material";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROFILES } from "../../GraphQL/queries";
import LinearProgress from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";
import debounce from 'lodash.debounce';

function Profiles() {
  // Set up state variables using the useState hook
  const [view, setView] = useState("card"); // view: the current view of the profiles page (either "card" or "grid")
  const [searchString, setSearchString] = useState(""); // searchString: the text in the search bar
  const [page, setPage] = React.useState(0); // page: the current page of profiles being displayed
  const [rows, setRows] = React.useState(16); // rows: the number of rows of profiles being displayed
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm")); // isMobile: a boolean that is true if the screen width is less than or equal to the "sm" breakpoint

  // This function is called when the view is changed
  const handleViewChange = (event, nextView) => {
    if (nextView) {
      setView(nextView); // set the view to the new view
    }
  };

  // Use the useEffect hook to set the view to "card" if the screen width is less than or equal to the "sm" breakpoint
  useEffect(() => {
    isMobile && setView("card");
  }, [isMobile]);

  // Use the useQuery hook from Apollo Client to fetch all profiles from the server
  const { loading, error, data, refetch } = useQuery(GET_ALL_PROFILES, {
    variables: {
      orderBy: {
        key: "first_name",
        sort: "asc",
      },
      rows,
      page,
      searchString,
    },
  });

  // This effect is triggered whenever the view changes,
  // and sets the page and rows variables based on the new view
  useEffect(() => {
    setPage(0);
    view === "card" ? setRows(16) : setRows(5);
  }, [view]);

  // This effect is triggered whenever any of the dependencies change,
  // and refetches the data from the server
  useEffect(() => {
    refetch();
  }, [page, rows, view, refetch]);
  // }, [page, rows, view, searchString]);

  // const debouncedSearch = debounce((searchString) => {
  const debouncedSearch = debounce(() => {
    refetch()
    // setSearchString(searchString);
  }, 500);

  return (
    <Container sx={{ p: 10, pt: 5 }}>
     {/* The search bar and buttons for creating a new profile and switching between views */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 2,
          mb: 5,
        }}
      >
        <TextField
          id="outlined-start-adornment"
          placeholder={"Search"}
          sx={{ flexGrow: 1, height: "100%" }}
          onChange={(e) => {
            setSearchString(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              debouncedSearch();
            }
          }}
        />
        {isMobile && (
          <Container
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              p: 0,
            }}
          >
            <Button
              variant="outlined"
              startIcon={<PersonAddAlt1Icon />}
              component={Link}
              color="default"
              to="/profile/add"
              sx={
                {
                  // whiteSpace: "nowrap",
                  // flexGrow: 1,
                  // mt: 2,
                  // width: "100%",
                  // justifyContent: "flex-end",
                }
              }
            >
              Create Profile
            </Button>
          </Container>
        )}
        {!isMobile && (
          <Button
            variant="outlined"
            startIcon={<PersonAddAlt1Icon />}
            component={Link}
            to="/profile/add"
            sx={{ whiteSpace: "nowrap", flexShrink: 0, height: "100%" }}
          >
            Create Profile
          </Button>
        )}
        {!isMobile && (
          <ToggleButtonGroup
            value={view}
            exclusive
            onChange={handleViewChange}
            aria-label="view switch"
            sx={{ flexShrink: 0, height: "100%" }}
          >
            <ToggleButton value="card" aria-label="card view">
              <ViewColumnIcon />
            </ToggleButton>
            <ToggleButton value="grid" aria-label="grid view">
              <ViewListRoundedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        )}
      </Container>
      <Container>
        {loading && (
          <p s={{ alignItems: "center" }}>
            <LinearProgress />
          </p>
        )}
        {error && <p>Something Went Wrong</p>}
        {data &&
          (view === "card" ? (
            <CardView data={data} refetch={refetch} />
          ) : (
            <GridView
              data={data}
              setPage={setPage}
              setRows={setRows}
              page={page}
              rows={rows}
              refetch={refetch}
            />
          ))}
      </Container>
    </Container>
  );
}

export default Profiles;
