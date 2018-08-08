import React, {Component} from 'react';

class Projects extends Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <h2>Beat Making Lab</h2>
        <p>This is a website targeted at young people trying
        to learn about beat-making online. It serves as an aggregate of
        excellent tutorials, sound packs, and competition sites. The core of the
        site is "The Lab," which allows users to upload beats, share them,
        and rate them. This project was built using Ruby on Rails and Reactjs.</p>
        <p>The overall time to make this project was one week. We plan
        to extend functionality in the future to allow users to have a username,
        sort beats by top-rated, "follow" other users, paginate beats, and
        share them.</p>

        <h2>DJ Khaled Portfolio</h2>
        <p>This is a hypothetical website for Miami-based musician DJ Khaled,
        who does not actually have a web site. This app allows users to learn
        about DJ Khaled, stream his music, buy his songs while filtering for
        explicit content, and look at his shop. This site was built using React and
        Express server.</p>
        <p>Overall time to make this project was one week. In the future we plan
        to change the styling to make it more mobile-responsive and cohesive
        across the board. We also believe this works as an excellent template
        for other musicians looking for a budget-friendly but beautiful web app.</p>

        <h2>Big Mama</h2>
        <p>This is a text-based adventure game using jQuery.
         It is inspired by text-based games from the 1980s.</p>
      </div>
    )
  }
}

export default Projects;
