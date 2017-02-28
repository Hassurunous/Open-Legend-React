import React, { Component } from 'react';
import Draggable from 'react-draggable';

export default class Attributes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDrags: 0,
            deltaPosition: {
              x: 0, y: 0
            },
            controlledPosition: {
              x: -400, y: 200
            }
        }
        this.handleDrag = this.handleDrag.bind(this);
        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.adjustXPos = this.adjustXPos.bind(this);
        this.adjustYPos = this.adjustYPos.bind(this);
        this.onControlledDrag = this.onControlledDrag.bind(this);
        this.onControlledDragStop = this.onControlledDragStop.bind(this);
    }

    handleDrag(e, ui) {
      const {x, y} = this.state.deltaPosition;
      this.setState({
        deltaPosition: {
          x: x + ui.deltaX,
          y: y + ui.deltaY,
        }
      });
    }

    onStart() {
      this.setState({activeDrags: ++this.state.activeDrags});
    }

    onStop() {
      this.setState({activeDrags: --this.state.activeDrags});
    }

    // For controlled component
    adjustXPos(e) {
      e.preventDefault();
      e.stopPropagation();
      const {x, y} = this.state.controlledPosition;
      this.setState({controlledPosition: {x: x - 10, y}});
    }

    adjustYPos(e) {
      e.preventDefault();
      e.stopPropagation();
      const {controlledPosition} = this.state;
      const {x, y} = this.state.controlledPosition;
      this.setState({controlledPosition: {x, y: y - 10}});
    }

    onControlledDrag(e, position) {
      const {x, y} = position;
      this.setState({controlledPosition: {x, y}});
    }

    onControlledDragStop(e, position) {
      const {x, y} = position;
      this.setState({controlledPosition: {x, y}});
    }

    render() {
      const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
      const {deltaPosition, controlledPosition} = this.state;
      return (
          <div className="box" style={{height: '1000px', width: '1000px', position: 'relative', overflow: 'auto'}}>
             <div style={{height: '1000px', width: '1000px'}}>
                 <Draggable bounds="parent" {...dragHandlers} grid={[25, 25]}>
                     <div className="box">
                         <Physical/>
                     </div>
                 </Draggable>
                 <Draggable bounds="parent" {...dragHandlers} grid={[25, 25]}>
                         <div className="box">
                             <Social/>
                         </div>
                 </Draggable>
                 <Draggable bounds="parent" {...dragHandlers} grid={[25, 25]}>
                         <div className="box">
                             <Mental/>
                         </div>
                 </Draggable>
                 <Draggable bounds="parent" {...dragHandlers} grid={[25, 25]}>
                     <div className="box">
                         <Extraordinary/>
                     </div>
                 </Draggable>
             </div>
          </div>
      );
    }
}

class Physical extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            agility: 0,
            fortitude: 0,
            might: 0
        };
    }

    render () {
        return (
            <div>
                <h3>Agility: {this.state.agility}</h3>
                <h3>Fortitude: {this.state.fortitude}</h3>
                <h3>Might: {this.state.might}</h3>
            </div>
        );
    }
}

class Social extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deception: 0,
            presence: 0,
            persuasion: 0
        };
    }

    render () {
        return (
            <div>
                <h3>Deception: {this.state.deception}</h3>
                <h3>Presence: {this.state.presence}</h3>
                <h3>Persuasion: {this.state.persuasion}</h3>
            </div>
        );
    }
}

class Mental extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            learning: 0,
            logic: 0,
            perception: 0,
            will: 0
        };
    }

    render () {
        // Here is a way to pull the state names from the object, for reference.
        for (var key in this.state) {
            // console.log(key);
        }

        return (
            <div>
                <h3>Learning: {this.state.learning}</h3>
                <h3>Logic: {this.state.logic}</h3>
                <h3>Perception: {this.state.perception}</h3>
                <h3>Will: {this.state.will}</h3>
            </div>
        );
    }
}

class Extraordinary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alteration: 0,
            creation: 0,
            energy: 0,
            entropy: 0,
            influence: 0,
            movement: 0,
            prescience: 0,
            protection: 0
        };
    }

    render () {
        return (
            <div>
                <h3>Alteration: {this.state.alteration}</h3>
                <h3>Creation: {this.state.creation}</h3>
                <h3>Energy: {this.state.energy}</h3>
                <h3>Entropy: {this.state.entropy}</h3>
                <h3>Influence: {this.state.influence}</h3>
                <h3>Movement: {this.state.movement}</h3>
                <h3>Prescience: {this.state.prescience}</h3>
                <h3>Protection: {this.state.protection}</h3>
            </div>
        );
    }
}
