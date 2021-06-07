This was created during my time as a student at Code Chrysalis.  It is a very simple API used to interface with a database for logging one's dreams.  The endpoints are as follows.

get /api/test_backend
This tests your connection to the backend server and alerts you as to whether or not you have made a connection.

get /api/test_database
This tests your connection to the database and alerts you as to whether or not you have made a connection.

get /api/dreams
This returns all logged dreams in the database.

get /api/dreams/:id
This returns the dream entry with the matching id ("uuid" format).

get /api/dreams/date/:date
This returns the dream with the matching date (Formate is "YYYY-MM-DD").

get /api/dreams/lucid/:bool
This returns all dreams based on whether they are lucid or not (Pass true for lucid dreams and false for non-lucid).

get /api/dreams/nightmare/:bool
This returns all dreams based on whether they were nightmares or not (Pass true for nightmares and false for non-nightmares).

get /api/dreams/summary/:word
This returns all dreams that have a given word in their summary.

get /api/dreams/description/:word
This returns all dreams that have a given word in their description.

get /api/dreams/meal/:meal
This returns all dreams that have a given word in their description for last meal eaten before bed.

get /api/dreams/activity/:activity
This returns all dreams that have a given word in their description for last activity before bed.

get /api/dreams/keyword/:word
This returns all dreams that have a given word in any of the above 4 description fields.

post /api/dreams
This logs a new dream to the database and fills the entries based on the following
{
  "was_lucid": boolean,
  "was_nightmare": boolean,
  "summary": string,
  "description": string,
  "last_meal_before_bed": string,
  "last_activity_before_bed": string,
  "date": string
}

delete /api/dreams/:id
This deletes a single dream with the matching id ("uuid" format).