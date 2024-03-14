import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {
    // Write code to update the progress and emit a 'goalReached' event when the goal is reached
    // update the progress
    this.progress += exercise.caloriesBurned;
    if(this.progress >= this.goal){
      //  Emit goalReached event if goal is reached
      this.emit('goalReached');
    }
  }
}

const Solution = () => {
  // define  listener that sends a congratulatory message to the user upon reaching their fitness goal
  const tracker = new FitnessTracker();
  tracker.on('goalReached', ()=>{
    console.log('Congratulations! You have reached your fitness goal');
  })
  // simulate adding exercise
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
};

Solution();

export { FitnessTracker, Solution };
