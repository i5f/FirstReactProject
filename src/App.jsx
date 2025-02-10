import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  //let or const doesn't matter
  const [selectedTopic, setSelectedTopic] = useState();
  //"Please click a button..." // this default value causes problems since there is no such topic in the EXAMPLES object
  //therefore we set the default value to the first key of the EXAMPLES object which is components
  // if we leave it blank it crashes again because it's undefined, we only showing content of the EXAMPLES object
  // but what if there is no content to show? so we need to use a fallback value/text, which is the following(down below)
  //stateArray[currState,stateUpdateFunc]     state setter func and the argument it takes is the init state

  function handleSelect(selectedButton) {
    // selectedButton -> 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  // the [3]rd way of doing this is with a variable and if statements, first two is down below
  // let tabContent = <p>Please select a topic.</p>;
  // if (selectedTopic) {
  //   tabContent = <div id="tab-content">
  //   <h3>{EXAMPLES[selectedTopic].title}</h3>
  //   <p>{EXAMPLES[selectedTopic].description}</p>
  //   <pre>
  //     <code>{EXAMPLES[selectedTopic].code}</code>
  //   </pre>
  // </div>
  //  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          {" "}
          {/* id is used to link to the core-concepts, core-concepts can be found in the index.css */}
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept {...conceptItem} key={conceptItem.title} />
            ))}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            spread operator to pass all the properties
            <CoreConcept {...CORE_CONCEPTS[1]} />{" "}
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          {" "}
          {/* needed for the styling purposes */}
          <h2>Examples</h2>
          <menu>
            {" "}
            {/* built in html element where it's used for creating a list of buttons */}
            {/* <TabButton>Components</TabButton> {/* TabButton is a custom 
          component which in the inside of other components and this is called
          component composition and we can do this with attributes like in the
          following way as well and now let's just call this one [1] */}
            {/* onSelect={handleSelect} -> this doesn't let us decide how
            the handleSelect is executed therefore we need to use an arrow function and give a string
            variable as an argument to let the function know which button is clicked and selected and
            therefore what to show as the dynamic content */}
            <TabButton
              label="Components"
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            />{" "}
            {/* [2] */}
            <TabButton
              label="JSX"
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            />
            <TabButton
              label="Props"
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            />
            <TabButton
              label="State"
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            />
          </menu>
          {/* instead of 'selectedTopic === undefined' we could simply say !selectedTopic
          and this is the [1]st way to do this */}
          {selectedTopic === undefined ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                {/* pre tag stands for preformatted text and is used to keep the white spaces, line
            breaks and indentation, i.e. formatting altogether, in the code */}
                <code>{EXAMPLES[selectedTopic].code}</code>
                {/* code tag is used to display inline or
              block-level code in a monospace font, doesn't preserve formatting by itself, so it's
              better to use this inside a pre tag */}
              </pre>
            </div>
          )}
          {/* [2]nd way of doing this would be with && i.e. 
          { !selectedTopic && <p>Please select a topic.</p>}
          { selected topic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
          */}
          {/* and another way is on the up above with a variable and if statements */}
        </section>
      </main>
    </div>
  );
}

export default App;
