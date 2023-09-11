const CoachingPage = () => {
  return (
    <div className="max-w-[800px] mx-auto">
      <h1>Personal Training Booking</h1>
      <p>Interested in setting up a Personal Training Session?</p>
      <p>Would you like to discuss your needs with a Personal Trainer?</p>
      <p>We have customized trainings that meet your needs or align with your developmental journey. Working with us gives that safety and most impact on your way to achieving your fitness goals and being a better player. </p>
      <p>Whether you are looking to perfect some skills, gain confidence, increase stamina or raise your game, we can help by carefully analyzing your personal goals, skill set and potential, and design a program that is safe, effective and specific to you. </p>
      <div className="">
        <h2>Individual Rates</h2>
        <div className="grid grid-cols-3 grid-rows-3 rounded-md border-themeGreen border gap-4 max-w-xl">
          <div></div>
          <div>30 Minute Session</div>
          <div>1 Hour Session</div>
          <div>Once Weekly</div>
          <div>$45 per Session</div>
          <div>$80 per session</div>
          <div>Twice Weekly</div>
          <div>$40 per session</div>
          <div>$70 per session</div>
        </div>
      </div>
      <div>
        <h2>Team Rates</h2>
        <div className="grid grid-cols-3 grid-rows-3 rounded-md border-themeGreen border">
          <div></div>
          <div>30 Minute Session</div>
          <div>1 Hour Session</div>
          <div>1 - 11 Players</div>
          <div>$80 per Session</div>
          <div>$150 per Session</div>
          <div>11+ Players</div>
          <div>$120 per session</div>
          <div>$250 per session</div>
        </div>
      </div>
    </div>
  )
}

export default CoachingPage