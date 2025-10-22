import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/about/AboutUs";
import Prospectus from "./pages/about/Prospectus";
import ExaminationResults from "./pages/about/ExaminationResults";
import OfstedReport from "./pages/about/OfstedReport";
import TheEliteParkTrust from "./pages/about/TheEliteParkTrust";
import HCA from "./pages/about/HCA";
import ReportingAnAbsence from "./pages/contact/ReportingAbsence";
import DirectionsToSchool from "./pages/contact/DirectionsToSchool";
import StudentDropOff from "./pages/contact/StudentDropOff";
import Admissions from "./pages/joinus/Admissions";
import Vacancies from "./pages/joinus/Vacancies";
// import TermDates from "./pages/information/TermDates";
import FundingReports from "./pages/information/FundingReports";
import TheSchoolDay from "./pages/information/TheSchoolDay";
import SpecialEducationalNeeds from "./pages/information/SpecialEducationalNeeds";
import YoungCarers from "./pages/information/YoungCarers";
import StatutoryInformation from "./pages/information/StatutoryInformation";
import Policies from "./pages/information/Policies";
import Newsletters from "./pages/information/Newsletterss";
import EqualityReport from "./pages/information/EqualityReport";
import ExamsInformation from "./pages/information/ExamInformation";
import InformationForParents from "./pages/information/InformationForParents";
import Subject from "./pages/curriculum/Subjects";
import BridgingWorkYear11_12 from "./pages/curriculum/BridgingWorkYear11_12";
import EliteParkValues from "./pages/curriculum/EliteParkValues";
import Careers from "./pages/curriculum/Careers";
import Year8OptionsEvening from "./pages/curriculum/Year8OptionsEvening";
import BridgingWorkYear10_11 from "./pages/curriculum/BridgingWorkYear10_11";
import EnrichmentTimetable from "./pages/curriculum/EnrichmentTimetable";
import CoreTextBooks from "./pages/curriculum/CoreTextBook";
import ArtsAndHumanitiesStrategy from "./pages/curriculum/ArtsAndHumanitiesStrategy";
import StayingSafe from "./pages/safeguarding/StayingSafe";
import OnlineSafety from "./pages/safeguarding/OnlineSafety";
import StudentWellbeing from "./pages/safeguarding/StudentWellbeing";
import AntiBullying from "./pages/safeguarding/AntiBullying";
import PreventDuty from "./pages/safeguarding/PreventDuty";
import SaferRecruitment from "./pages/safeguarding/SaferRecruitment";
// import ApplicationsEnrolment from "./pages/sixthform/ApplicationsEnrolment";
import SixthFormEntryRequirements from "./pages/sixthform/SixthFormEntryRequirements";
import ALevelResults from "./pages/sixthform/ALevelResults";
import UsefulLinks from "./pages/sixthform/UsefulLinks";
import LeaverDestinations from "./pages/sixthform/LeaverDestinations";
import OurVision from "./pages/about/OurVision";
import ScrollToTop from "./components/ScrollToTop";
import NewspaperCarousel from "./components/NewspaperCarousel";
import ApplicationsEnrolment from "./pages/sixthform/ApplicationEnrolment";
import TermDates from "./pages/information/TermsDates";


// // simple placeholders for now
// const About = () => <h1 className="text-2xl text-blue-600">About Page</h1>;
// const Admissions = () => <h1 className="text-2xl text-green-600">Admissions Page</h1>;

const App = () => {
  return (
    <main>
      <NavBar />
      <ScrollToTop />
      <div className="pt-14.5 px-0.5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about/about-us" element={<AboutUs />} />
          <Route path="/about/prospectus" element={<Prospectus />} />
          <Route path="about/examination-results" element={<ExaminationResults />} />
          <Route path="/about/ofsted-report" element={<OfstedReport />} />
          <Route path="/about/the-elitepark-trust" element={<TheEliteParkTrust />} />
          <Route path="/about/hca" element={<HCA />} />
          <Route path="/contact/reporting-an-absence" element={<ReportingAnAbsence />}/>
          <Route path="/contact/directions-to-school" element={<DirectionsToSchool />} />
          <Route path="/contact/student-drop-off" element={<StudentDropOff />} />
          <Route path="/joinus/admissions" element={<Admissions />} />
          <Route path="/joinus/vacancies" element={<Vacancies />} />
          <Route path="/information/term-dates" element={<TermDates />} />
          <Route path="/information/funding-reports" element={<FundingReports />} />
          <Route path="/information/the-school-day" element={<TheSchoolDay />} />
          <Route path="/information/special-educational-needs" element={<SpecialEducationalNeeds />} />
          <Route path="/information/young-carers" element={<YoungCarers />} />
          <Route path="/information/statutory-information" element={<StatutoryInformation />} />
          <Route path="/information/policies" element={<Policies />} />
          <Route path="/information/newsletters" element={<Newsletters />} />
          <Route path="/information/equality-report" element={<EqualityReport />} />
          <Route path="/information/exams-information" element={<ExamsInformation />} />
          <Route path="/information/information-for-parents" element={<InformationForParents />} />
          <Route path="/curriculum/subjects" element={<Subject />} />
          <Route path="/curriculum/bridging-work-year-11-12" element={<BridgingWorkYear11_12 />} />
          <Route path="/curriculum/elitepark-values" element={<EliteParkValues />} />
          <Route path="/curriculum/careers" element={<Careers />} />
          <Route path="/curriculum/year-8-options-evening" element={<Year8OptionsEvening />} />
          <Route path="/curriculum/bridging-work-year-10-–-11" element={<BridgingWorkYear10_11 />} />
          <Route path="/curriculum/enrichment-timetable" element={<EnrichmentTimetable />} />
          <Route path="/curriculum/core-text-books-&-revision-guides" element={<CoreTextBooks />} />
          <Route path="/curriculum/arts-and-humanities-strategy" element={<ArtsAndHumanitiesStrategy />} />
          <Route path="/safeguarding/staying-safe" element={<StayingSafe />} />
          <Route path="/safeguarding/online-safety" element={<OnlineSafety />} />
          <Route path="/safeguarding/student-wellbeing" element={<StudentWellbeing />} />
          <Route path="safeguarding/anti-bullying" element={<AntiBullying />} />
          <Route path="/safeguarding/the-prevent-duty" element={<PreventDuty />} />
          <Route path="/safeguarding/safer-recruitment" element={<SaferRecruitment />} />
          <Route path="/sixthform/applications-and-enrolment" element={<ApplicationsEnrolment />} />
          <Route path="/sixthform/sixth-form-bursaries" element={<SixthFormEntryRequirements />} />
          <Route path="/sixthform/a-level-results" element={<ALevelResults />} />
          <Route path="/sixthform/sixth-form-entry-requirements" element={<SixthFormEntryRequirements />} />
          <Route path="/sixthform/useful-links" element={<UsefulLinks />} />
          <Route path="/sixthform/leaver-destinations" element={<LeaverDestinations />} />
          <Route path="/about/our-vision" element={<OurVision />} />
          <Route path="/news-paper-carousel" element={<NewspaperCarousel />}/>
          <Route path="/bridging-work-year11-12" element={<BridgingWorkYear11_12 />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
};

export default App;
