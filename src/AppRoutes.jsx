import { Route, Routes } from "react-router-dom";
import { NotFound } from "./component/NotFound";
import { Layout } from "./component/Layout";
import PrivacyPolicy from "./page/PrivacyPolicy"
import About from "./pages/About"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mocktest" element={ <PrivateRoutes> <MockTest /> </PrivateRoutes> } />
        <Route path="/JobSection" element={<JobSection />}></Route>
        <Route path='/termsandconditions' element={<TermsAndConditions/> } > </Route>
        <Route path='/faq' element={<FAQ /> } > </Route>
        <Route path='/privacypolicy' element={<PrivacyPolicy /> } > </Route>
        <Route path='/privacypolicy' element={<PrivacyPolicy /> } > </Route>
        {/* <Route path="/profile" element={<Profilecreated />}> {" "} </Route> */}
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}> {" "} </Route>
        <Route path="/myprofile" element={<PrivateRoutes> <MyProfile /></PrivateRoutes> } />
        <Route path="/articleDetails/:id" element={<Page />} />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/LoginPage" element={<Login />}></Route>
      <Route path="/SignUp" element={<SignupPage />}></Route>
      <Route path="/resetpassword" element={<ResetPasswordPage />}></Route>
      <Route path="/createpassword" element={<CreatePassword />}></Route>
      <Route path="/otpForResetPassword" element={<OtpForResetPassword /> }></Route>
      <Route path="/otp" element={<OtpPage />}></Route>
      <Route path="/createyourprofile" element={<CreateYourProfilePage />}></Route>
      <Route path="/createnewpassword" element={<CreateNewPasswordPage />} ></Route>
    </Routes>
  );
};
