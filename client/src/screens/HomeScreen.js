import {
  Typography,
  Box,
  makeStyles,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import { useState } from "react";
const useStyles = makeStyles({
  songListColor: {
    backgroundColor: "#fff",
    fontWeight: "bold",
    color: "#000000",
    margin: 15,
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  tableHeadCell: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
const HomeScreen = () => {
  const classes = useStyles();
  const [songs, setSongs] = useState([
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/6173807/pexels-photo-6173807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      song: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      dateOfRelease: "12 july 1200",
      artists: "Ankit Kumar",
      rate: "12",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/6173807/pexels-photo-6173807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      song: "sunt aut occaecati excepturi optio reprehenderit",
      dateOfRelease: "12 july 1200",
      artists: "Ankit Kumar",
      rate: "14",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/6173807/pexels-photo-6173807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      song: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      dateOfRelease: "12 july 1200",
      artists: "Ankit Kumar",
      rate: "10",
    },
  ]);
  return (
    <>
      <Box p={2} className={classes.songListColor}>
        <Typography variant="h4">Top 10 Songs</Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            alert("clicked");
          }}
        >
          Add Song
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center" className={classes.tableHeadCell}>
                No
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                ArtWork
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Song
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Date of Release
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Artist
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Rate
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {songs.map((song, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">
                    <div>
                      <img
                        src={song.image}
                        style={{ height: 120, width: 120 }}
                      />
                    </div>
                  </TableCell>
                  <TableCell align="center">{song.song}</TableCell>
                  <TableCell align="center">{song.dateOfRelease}</TableCell>
                  <TableCell align="center">{song.artists}</TableCell>
                  <TableCell align="center">{song.rate}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2} className={classes.songListColor}>
        <Typography variant="h4">Top 10 Artist</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center" className={classes.tableHeadCell}>
                No
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Artist
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Date Of Birth
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Songs
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {songs.map((song, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">{song.artists}</TableCell>
                  <TableCell align="center">{song.dateOfRelease}</TableCell>
                  <TableCell align="center">{song.song}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default HomeScreen;
