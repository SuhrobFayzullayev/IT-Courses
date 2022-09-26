// Components
import BecomeVanillaJavascriptDeveloper from "./BecomeVanillaJavascriptDeveloper";
import Chance from "./Chance";
import CourceDescription from "./CourceDescription";
import FAQ from "./FAQ";
import Join from "./Join";
import ReadersFeedback from "./ReadersFeedback";
import Sponsors from "./Sponsors";
import YourInstructor from "./YourInstructor";

// React function component
export default function Main() {
  return (
    <div>
      {/* There are BecomeVanillaJavascriptDeveloper Component */}
      <BecomeVanillaJavascriptDeveloper />

      {/* There are Chance Component */}
      <Chance />

      {/* There are CourceDescription Component */}
      <CourceDescription />

      {/* There are Chance Component */}
      <YourInstructor />

      {/* There are Sponsors Component */}
      <Sponsors />

      {/* There are ReadersFeedback Component */}
      <ReadersFeedback />

      {/* There are FAQ Component */}
      <FAQ />

      {/* There are Join Component */}
      <Join />
    </div>
  );
}
