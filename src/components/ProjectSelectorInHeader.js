import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
const axios = require('axios').default;

export default function ProjectSelectorInHeader() {
  const [publicProjects, setPublicProjects] = useState([
    "java",
    "Python",
    "sql",
  ]);
  // const [privateProjects, setPrivateProjects] = useState([
  //   "android",
  //   "React",
  //   "SnakeGame",
  // ]);

  const getRepos = async() => {
    // var GitHub = require("github-api");

    // // basic auth
    // var gh = new GitHub({
    //   username: "yogeshmehare124@gmail.com",
    //   //    password: 'NotFoo'

    //   /* also acceptable:
    //   token: 'MY_OAUTH_TOKEN'
    // */

    //   token: "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",
    // });

    // var me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided

    // var yogesh = gh.getUser("yogeshmehare");
    // yogesh.listRepos(function (err, repos) {
    //   // look at all the starred repos!

    //   console.log(err, repos);
    // });

    // const data = await axios.get("https://api.github.com/yogeshmehare/repos")
    const data = await fetch("/getRepos")
    const jsonData = await data.json()
    console.log(jsonData.projs)
    setPublicProjects(jsonData.projs)
  }

  return (
    <div  onClick={()=>{getRepos()}}>
      <FormControl sx={{ m: 1, minWidth: 120 }} >
        <InputLabel htmlFor="grouped-native-select">All Projects</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          label="Grouping"
        >
          <option aria-label="None" value="Click on my projects" />
          <optgroup label="Public Projects">
            {publicProjects.map((proj) => (
              <option key={proj.name} value={proj.name}>
                {proj.name}
              </option>
            ))}
          </optgroup>
        </Select>
      </FormControl>
    </div>
  );
}


{/* <optgroup label="Private Projects">
{privateProjects.map((proj) => (
  <option key={proj.name} value={proj.name}>
    {proj.name}
  </option>
))}
</optgroup> */}