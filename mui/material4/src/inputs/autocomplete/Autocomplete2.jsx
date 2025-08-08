// import logo from './logo.svg';
// import './App.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const topFilms = () => [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 }
];
function Autocomplete2() {
    return (
        <div className="App">
            <p>The autocomplete example 2 : 
                with suggestion only input</p>
               <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={topFilms().map((option) => option.label)}
                sx={{ width: 400 }}
                renderInput={(params) => <TextField {...params} 
                    label="freeSolo input" />}
            />
        </div>
    );
}

export default Autocomplete2;