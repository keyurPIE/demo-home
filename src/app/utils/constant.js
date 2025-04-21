import { Group, Home, Logout, Person, Settings, Tv } from "@mui/icons-material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import GroupsIcon from "@mui/icons-material/Groups";
import LinkIcon from "@mui/icons-material/Link";

const constant = {
  // Sidebar items list data
  sidebarItems: [
    { label: "Home", icon: <Home /> },
    { label: "Users", icon: <Group /> },
  ],

  sidebarItemsBottom: [
    { label: "Settings", icon: <Settings /> },
    { label: "Profile", icon: <Person /> },
    { label: "Log Out", icon: <Logout /> },
  ],

  // static 100 films data
  top100Films: [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    {
      label: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      label: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { label: "Forrest Gump", year: 1994 },
    { label: "Inception", year: 2010 },
    {
      label: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: "Goodfellas", year: 1990 },
    { label: "The Matrix", year: 1999 },
    { label: "Seven Samurai", year: 1954 },
    {
      label: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
    { label: "City of God", year: 2002 },
    { label: "Se7en", year: 1995 },
    { label: "The Silence of the Lambs", year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: "Life Is Beautiful", year: 1997 },
    { label: "The Usual Suspects", year: 1995 },
    { label: "Léon: The Professional", year: 1994 },
    { label: "Spirited Away", year: 2001 },
    { label: "Saving Private Ryan", year: 1998 },
    { label: "Once Upon a Time in the West", year: 1968 },
    { label: "American History X", year: 1998 },
    { label: "Interstellar", year: 2014 },
    { label: "Casablanca", year: 1942 },
    { label: "City Lights", year: 1931 },
    { label: "Psycho", year: 1960 },
    { label: "The Green Mile", year: 1999 },
    { label: "The Intouchables", year: 2011 },
    { label: "Modern Times", year: 1936 },
    { label: "Raiders of the Lost Ark", year: 1981 },
    { label: "Rear Window", year: 1954 },
    { label: "The Pianist", year: 2002 },
    { label: "The Departed", year: 2006 },
    { label: "Terminator 2: Judgment Day", year: 1991 },
    { label: "Back to the Future", year: 1985 },
    { label: "Whiplash", year: 2014 },
    { label: "Gladiator", year: 2000 },
    { label: "Memento", year: 2000 },
    { label: "The Prestige", year: 2006 },
    { label: "The Lion King", year: 1994 },
    { label: "Apocalypse Now", year: 1979 },
    { label: "Alien", year: 1979 },
    { label: "Sunset Boulevard", year: 1950 },
    {
      label:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964,
    },
    { label: "The Great Dictator", year: 1940 },
    { label: "Cinema Paradiso", year: 1988 },
    { label: "The Lives of Others", year: 2006 },
    { label: "Grave of the Fireflies", year: 1988 },
    { label: "Paths of Glory", year: 1957 },
    { label: "Django Unchained", year: 2012 },
    { label: "The Shining", year: 1980 },
    { label: "WALL·E", year: 2008 },
    { label: "American Beauty", year: 1999 },
    { label: "The Dark Knight Rises", year: 2012 },
    { label: "Princess Mononoke", year: 1997 },
    { label: "Aliens", year: 1986 },
    { label: "Oldboy", year: 2003 },
    { label: "Once Upon a Time in America", year: 1984 },
    { label: "Witness for the Prosecution", year: 1957 },
    { label: "Das Boot", year: 1981 },
    { label: "Citizen Kane", year: 1941 },
    { label: "North by Northwest", year: 1959 },
    { label: "Vertigo", year: 1958 },
    {
      label: "Star Wars: Episode VI - Return of the Jedi",
      year: 1983,
    },
    { label: "Reservoir Dogs", year: 1992 },
    { label: "Braveheart", year: 1995 },
    { label: "M", year: 1931 },
    { label: "Requiem for a Dream", year: 2000 },
    { label: "Amélie", year: 2001 },
    { label: "A Clockwork Orange", year: 1971 },
    { label: "Like Stars on Earth", year: 2007 },
    { label: "Taxi Driver", year: 1976 },
    { label: "Lawrence of Arabia", year: 1962 },
    { label: "Double Indemnity", year: 1944 },
    {
      label: "Eternal Sunshine of the Spotless Mind",
      year: 2004,
    },
    { label: "Amadeus", year: 1984 },
    { label: "To Kill a Mockingbird", year: 1962 },
    { label: "Toy Story 3", year: 2010 },
    { label: "Logan", year: 2017 },
    { label: "Full Metal Jacket", year: 1987 },
    { label: "Dangal", year: 2016 },
    { label: "The Sting", year: 1973 },
    { label: "2001: A Space Odyssey", year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: "Toy Story", year: 1995 },
    { label: "Bicycle Thieves", year: 1948 },
    { label: "The Kid", year: 1921 },
    { label: "Inglourious Basterds", year: 2009 },
    { label: "Snatch", year: 2000 },
    { label: "3 Idiots", year: 2009 },
    { label: "Monty Python and the Holy Grail", year: 1975 },
  ],

  // single user tabs
  TabWithIcon: [
    { label: "Profile", icon: <Person /> },
    { label: "Teams", icon: <GroupsIcon /> },
    { label: "Projects", icon: <Tv /> },
    { label: "Connections", icon: <LinkIcon className="-rotate-45" /> },
  ],

  // Profile Tab connections static data
  connectionsData: [
    {
      avatar: "/avatar/dummy-user-image.png",
      title: "Cecilia Payne",
      subText: "45 Connections",
      icon: <PersonAddIcon />,
      isConnected: false,
    },
    {
      avatar: "/avatar/user-image-seven-female.png",
      title: "Curtis Fletcher",
      subText: "1.32k Connections",
      icon: <PersonAddIcon />,
      isConnected: false,
    },
    {
      avatar: "/avatar/user-image-three-female.png",
      title: "Alice Stone",
      subText: "125 Connections",
      icon: <PersonOutlineRoundedIcon />,
      isConnected: true,
    },
    {
      avatar: "/avatar/user-image-five-male.png",
      title: "Darrell Barnes",
      subText: "456 Connections",
      icon: <PersonOutlineRoundedIcon />,
      isConnected: true,
    },
    {
      avatar: "/avatar/user-image-six-female.png",
      title: "Eugenia Moore",
      subText: "1.2k Connections",
      icon: <PersonAddIcon />,
      isConnected: false,
    },
  ],

  // Profile Tab teams static data
  teamsData: [
    {
      avatar: "/avatar/react-label.png",
      title: "React Developers",
      subText: "72 Members",
      icon: "Developer",
    },
    {
      avatar: "/avatar/support-label.png",
      title: "Support Team",
      subText: "122 Members",
      icon: "Support",
    },
    {
      avatar: "/avatar/figma-label.png",
      title: "UI Designers",
      subText: "7 Members",
      icon: "Designer",
    },
    {
      avatar: "/avatar/vue-label.png",
      title: "Vue.js Developers",
      subText: "289 Members",
      icon: "Developer",
    },
    {
      avatar: "/avatar/twitter-label.png",
      title: "Digital Marketing",
      subText: "24 Members",
      icon: "Marketing",
    },
  ],

  // color Palates:
  orangeColorCode: { color: "#FF4D49", background: "#FFE3E2" }, // orange color code
  purpleColorCode: { color: "#666CFF", background: "#E7E7FF" }, // Purple color code
  blueColorCode: { color: "#26c6f9", background: "#dcf6fe" }, // Blue color code
  greyColorCode: { color: "#6d788d", background: "#e8e9ed" }, // grey color code
  greenColorCode: { color: "#71E128", background: "#E8FADD" }, // green color code
  mangoColorCode: { color: "#FDB528", background: "#FFF3DD" }, // mango color code
  defaultColorCode: { color: "#FFF", background: "#666cff" }, // default color code
};

export default constant;
