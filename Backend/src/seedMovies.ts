import supabase from "./config/supabase";

const movies = [
  {
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    release_year: "2010-07-16T00:00:00Z",
    imgUrl:
      "https://www.imdb.com/title/tt1375666/mediaviewer/rm3426651392/?ref_=tt_ov_i",
    price: 149,
  },
  {
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    release_year: "2008-07-18T00:00:00Z",
    imgUrl:
      "https://www.imdb.com/title/tt0468569/mediaviewer/rm4023877632/?ref_=tt_ov_i",
    price: 159,
  },
  {
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    release_year: "2014-11-07T00:00:00Z",
    imgUrl:
      "https://www.imdb.com/title/tt0816692/mediaviewer/rm1518076416/?ref_=tt_ov_i",
    price: 169,
  },
  {
    title: "The Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    release_year: "1999-03-31T00:00:00Z",
    imgUrl:
      "https://www.imdb.com/title/tt0133093/mediaviewer/rm1646221056/?ref_=tt_ov_i",
    price: 139,
  },
  {
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    release_year: "1994-10-14T00:00:00Z",
    imgUrl:
      "https://www.imdb.com/title/tt0111161/mediaviewer/rm10105600/?ref_=tt_ov_i",
    price: 149,
  },
  {
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    release_year: "1972-03-24T00:00:00Z",
    imgUrl:
      "https://www.imdb.com/title/tt0068646/mediaviewer/rm746868224/?ref_=tt_ov_i",
    price: 199,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    release_year: "2001-12-19T00:00:00Z",
    imgUrl:
      "https://www.imdb.com/title/tt0120737/mediaviewer/rm3592959488/?ref_=tt_ov_i",
    price: 189,
  },
  {
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    release_year: "1994-10-14T00:00:00Z",
    imgUrl:
      "https://www.imdb.com/title/tt0110912/mediaviewer/rm1959540736/?ref_=tt_ov_i",
    price: 139,
  },
  {
    title: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
    release_year: "1999-10-15T00:00:00Z",
    imgUrl:
      "https://www.imdb.com/title/tt0137523/mediaviewer/rm1835569152/?ref_=tt_ov_i",
    price: 129,
  },
  {
    title: "Forrest Gump",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    release_year: "1994-07-06T00:00:00Z",
    imgUrl:
      "https://www.imdb.com/title/tt0109830/mediaviewer/rm1959540736/?ref_=tt_ov_i",
    price: 159,
  },
];

const seedMovies = async () => {
  for (const movie of movies) {
    const { data, error } = await supabase.from("movies").insert([movie]);

    if (error) {
      console.error("Error inserting movie:", error.message);
    } else {
      console.log("Inserted movie:", data);
    }
  }
};

seedMovies();
