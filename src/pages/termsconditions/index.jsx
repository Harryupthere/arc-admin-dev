import React from "react";
import "./termsconditions.scss";
import { Icons } from "../../utils/customFn";
import { NavLink } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
const TermsConditions = () => {
  const BoldText = ({ children }) => (
    <span className="blod-text">{children}</span>
  );
  return (
    <>
      <div className="terms-conditions-data page-data-layout">
        <div className="heading-main">
          <h2>Terms & Conditions</h2>
          <p>
            <img src={Icons["time-line.svg"]} alt="time-line" />
            Last updated April 01, 2024
          </p>
        </div>
        <div className="text-top">
          <p>
            This privacy notice for ARC (PVT) LTD (
            <BoldText>&quot;we&quot;</BoldText>
            <BoldText>&quot; us &quot;</BoldText>, or{" "}
            <BoldText>&quot; our &quot;</BoldText>), describes how and why we
            might collect, store, use, and/or share{" "}
            <BoldText>&quot; process &quot;</BoldText> your information when you
            use our services <BoldText>&quot; Services &quot;</BoldText>, such
            as when you:
          </p>
          <ul>
            <li>
              Download and use our mobile application (ARC), or any other
              application of ours that links to this privacy notice
            </li>
            <li>
              Engage with us in other related ways, including any sales,
              marketing, or events
            </li>
          </ul>
          <p>
            <BoldText>Questions or concerns?</BoldText> Reading this privacy
            notice will help you understand your privacy rights and choices. If
            you do not agree with our policies and practices, please do not use
            our Services.
          </p>
        </div>

        <div className="text-top text-sec">
          <div className="heading-inner">
            <h2>SUMMARY OF KEY POINTS</h2>
          </div>

          <p className="mb-3">
            <BoldText>
              This summary provides key points from our privacy notice, but you
              can find out more details about any of these topics by clicking
              the link following each key point or by using our{" "}
              <NavLink to=""> table of contents </NavLink> below to find the
              section you are looking for.
            </BoldText>
          </p>

          <p className="mb-3">
            <BoldText>What personal information do we process?</BoldText> When
            you visit, use, or navigate our Services, we may process personal
            information depending on how you interact with us and the Services,
            the choices you make, and the products and features you use.
            <NavLink to="">
              Learn more about personal information you disclose to us.
            </NavLink>
          </p>

          <p className="mb-3">
            <BoldText>
              Do we process any sensitive personal information?
            </BoldText>{" "}
            We do not process sensitive personal information.
          </p>

          <p className="mb-3">
            <BoldText>
              {" "}
              Do we receive any information from third parties?
            </BoldText>{" "}
            We do not receive any information from third parties.
          </p>

          <p className="mb-3">
            <BoldText> How do we process your information?</BoldText> We process
            your information to provide, improve, and administer our Services,
            communicate with you, for security and fraud prevention, and to
            comply with law. We may also process your information for other
            purposes with your consent. We process your information only when we
            have a valid legal reason to do so. Learn more about{" "}
            <NavLink to="">how we process your information </NavLink>
          </p>

          <p className="mb-3">
            <BoldText>
              {" "}
              In what situations and with which types of parties do we share
              personal information?
            </BoldText>{" "}
            We may share information in specific situations and with specific
            categories of third parties. Learn more about
            <NavLink to="">
              when and with whom we share your personal information{" "}
            </NavLink>
          </p>

          <p className="mb-3">
            <BoldText> How do we keep your information safe?</BoldText> We have
            organizational and technical processes and procedures in place to
            protect your personal information. However, no electronic
            transmission over the internet or information storage technology can
            be guaranteed to be 100% secure, so we cannot promise or guarantee
            that hackers, cybercriminals, or other unauthorized third parties
            will not be able to defeat our security and improperly collect,
            access, steal, or modify your information. Learn more about
            <NavLink to="">how we keep your information safe </NavLink>
          </p>

          <p className="mb-3">
            <BoldText> What are your rights?</BoldText> Depending on where you
            are located geographically, the applicable privacy law may mean you
            have certain rights regarding your personal information. Learn more
            about <NavLink to="">your privacy rights</NavLink>
          </p>

          <p className="mb-3">
            <BoldText> How do you exercise your rights?</BoldText> The easiest
            way to exercise your rights is by submitting a{" "}
            <NavLink to=""> data subject access request </NavLink> or by
            contacting us. We will consider and act upon any request in
            accordance with applicable data protection laws. your privacy rights
          </p>

          <p className="mb-3">
            Want to learn more about what we do with any information we collect?{" "}
            <NavLink to=""> Review the privacy notice in full.</NavLink>
          </p>
        </div>

        <div className="table-content-faq">
          <div className="heading-inner">
            <h2>TABLE OF CONTENTS</h2>
          </div>

          <div className="acc-data-main">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. WHAT INFORMATION DO WE COLLECT?
                </Accordion.Header>
                <Accordion.Body>
                  <div className="text-top">
                    <p className="mb-3">
                      {" "}
                      Personal information you disclose to us
                    </p>
                    <p className="mb-3">
                      <BoldText> In Short:</BoldText>We collect personal
                      information that you provide to us.
                    </p>
                    <p className="mb-3">
                      {" "}
                      We collect personal information that you voluntarily
                      provide to us when you register on the Services express an
                      interest in obtaining information about us or our products
                      and Services, when you participate in activities on the
                      Services, or otherwise when you contact us.
                    </p>

                    <p>
                      <BoldText>Personal Information Provided by You.</BoldText>{" "}
                      The personal information that we collect depends on the
                      context of your interactions with us and the Services, the
                      choices you make, and the products and features you use.
                      The personal information we collect may include the
                      following:
                    </p>
                    <ul>
                      <li> names </li>
                      <li> phone numbers </li>
                      <li> email addresses </li>
                      <li> mailing addresses </li>
                      <li> passwords </li>
                      <li> usernames </li>
                      <li> contact preferences </li>
                      <li> contact or authentication data </li>
                      <li> billing addresses</li>
                      <li> debit/credit card numbers </li>
                    </ul>
                    <p className="mb-3">
                      <BoldText> Sensitive Information.</BoldText> We do not
                      process sensitive information.
                    </p>

                    <p className="mb-3">
                      <BoldText> Payment Data.</BoldText> We may collect data
                      necessary to process your payment if you make purchases,
                      such as your payment instrument number, and the security
                      code associated with your payment instrument. All payment
                      data is stored by PayHere. You may find their privacy
                      notice link(s) here:
                      <NavLink to="https://www.payhere.lk/privacy/.">
                        {" "}
                        https://www.payhere.lk/privacy/.
                      </NavLink>
                    </p>

                    <p className="mb-3">
                      <BoldText> Social Media Login Data.</BoldText> We may
                      provide you with the option to register with us using your
                      existing social media account details, like your Google,
                      Facebook, Twitter, or other social media account. If you
                      choose to register in this way, we will collect the
                      information described in the section called{" "}
                      <NavLink to="">
                        {" "}
                        &quot; HOW DO WE HANDLE YOUR SOCIAL LOGINS?&quot;
                      </NavLink>{" "}
                      below.
                    </p>

                    <p>
                      <BoldText> Application Data.</BoldText>If you use our
                      application(s), we also may collect the following
                      information if you choose to provide us with access or
                      permission:
                    </p>

                    <ul className="mb-3">
                      <li>
                        {" "}
                        Geolocation Information. We may request access or
                        permission to track location-based information from your
                        mobile device, either continuously or while you are
                        using our mobile application(s), to provide certain
                        location-based services. If you wish to change our
                        access or permissions, you may do so in your{" "}
                        {`device's`} settings.{" "}
                      </li>

                      <li>
                        {" "}
                        Mobile Device Access. We may request access or
                        permission to certain features from your mobile device,
                        including your mobile{`device's`} camera, microphone,
                        sensors, sms messages, storage, and other features. If
                        you wish to change our access or permissions, you may do
                        so in your {`device's`}settings.{" "}
                      </li>

                      <li>
                        {" "}
                        Mobile Device Data.We automatically collect device
                        information (such as your mobile device ID, model, and
                        manufacturer), operating system, version information and
                        system configuration information, device and application
                        identification numbers, browser type and version,
                        hardware model Internet service provider and/or mobile
                        carrier, and Internet Protocol (IP) address (or proxy
                        server). If you are using our application(s), we may
                        also collect information about the phone network
                        associated with your mobile device, your mobile device’s
                        operating system or platform, the type of mobile device
                        you use, your mobile device’s unique device ID, and
                        information about the features of our application(s) you
                        accessed.{" "}
                      </li>

                      <li>
                        {" "}
                        Push Notifications. We may request to send you push
                        notifications regarding your account or certain features
                        of the application(s). If you wish to opt out from
                        receiving these types of communications, you may turn
                        them off in your{`device's`} settings.
                      </li>
                    </ul>
                    <p>
                      This information is primarily needed to maintain the
                      security and operation of our application(s), for
                      troubleshooting, and for our internal analytics and
                      reporting purposes.
                    </p>

                    <p className="mb-3">
                      All personal information that you provide to us must be
                      true, complete, and accurate, and you must notify us of
                      any changes to such personal information.
                    </p>

                    <p className="mb-3">
                      <BoldText> Information automatically collected</BoldText>
                    </p>

                    <p className="mb-3">
                      <BoldText> In Short:</BoldText> Some information — such as
                      your Internet Protocol (IP) address and/or browser and
                      device characteristics — is collected automatically when
                      you visit our Services.
                    </p>

                    <p className="mb-3">
                      We automatically collect certain information when you
                      visit, use, or navigate the Services. This information
                      does not reveal your specific identity (like your name or
                      contact information) but may include device and usage
                      information, such as your IP address, browser and device
                      characteristics, operating system, language preferences,
                      referring URLs, device name, country, location,
                      information about how and when you use our Services, and
                      other technical information. This information is primarily
                      needed to maintain the security and operation of our
                      Services, and for our internal analytics and reporting
                      purposes.
                    </p>

                    <p className="mb-3">
                      Like many businesses, we also collect information through
                      cookies and similar technologies.You can find out more
                      about this in our Cookie Notice:{" "}
                      <NavLink to="http://www.ARC.lk/privacy.">
                        http://www.ARC.lk/privacy.{" "}
                      </NavLink>
                    </p>

                    <p>The information we collect includes:</p>

                    <ul className="mb-3">
                      <li>
                        Log and Usage Data.Log and usage data is
                        service-related, diagnostic, usage, and performance
                        information our servers automatically collect when you
                        access or use our Services and which we record in log
                        files. Depending on how you interact with us, this log
                        data may include your IP address, device information,
                        browser type, and settings and information about your
                        activity in the Services (such as the date/time stamps
                        associated with your usage, pages and files viewed,
                        searches, and other actions you take such as which
                        features you use), device event information (such as
                        system activity, error reports (sometimes called
                        &quot;crash dumps &quot;), and hardware settings).
                      </li>

                      <li>
                        {" "}
                        Device Data.We collect device data such as information
                        about your computer, phone, tablet, or other device you
                        use to access the Services. Depending on the device
                        used, this device data may include information such as
                        your IP address (or proxy server), device and
                        application identification numbers, location, browser
                        type, hardware model, Internet service provider and/or
                        mobile carrier, operating system, and system
                        configuration information.
                      </li>

                      <li>
                        {" "}
                        Location Data.We collect location data such as
                        information about your {`device's`} location, which can
                        be either precise or imprecise. How much information we
                        collect depends on the type and settings of the device
                        you use to access the Services. For example, we may use
                        GPS and other technologies to collect geolocation data
                        that tells us your current location (based on your IP
                        address). You can opt out of allowing us to collect this
                        information either by refusing access to the information
                        or by disabling your Location setting on your device.
                        However, if you choose to opt out, you may not be able
                        to use certain aspects of the Services.
                      </li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. HOW DO WE PROCESS YOUR INFORMATION?
                </Accordion.Header>
                <Accordion.Body>
                <div className="text-top">
                 <p className="mb-3">
                      <BoldText> In Short:</BoldText>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                    </p>       

                    <p>
                      <BoldText>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</BoldText>{" "}
                    </p>
                    <ul>
                      <li> <p >
                      <BoldText> To facilitate account creation and authentication and otherwise manage user accounts.</BoldText>We may process your information so you can create and log in to your account, as well as keep your account in working order.
                    </p> </li>
                     

                    <li> <p >
                      <BoldText> To deliver and facilitate delivery of services to the user.</BoldText>We may process your information to provide you with the requested service.
                    </p> </li>

                    <li> <p >
                      <BoldText> To respond to user inquiries/offer support to users.</BoldText>We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
                    </p> </li>

                    <li> <p >
                      <BoldText> To send administrative information to you.</BoldText>We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.
                    </p> </li>

                    <li> <p >
                      <BoldText> To fulfill and manage your orders.</BoldText>We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.
                    </p> </li>

                    <li> <p >
                      <BoldText> To enable user-to-user communications.</BoldText>We may process your information if you choose to use any of our offerings that allow for communication with another user.
                    </p> </li>

                    <li> <p >
                      <BoldText> To request feedback.</BoldText>We may process your information when necessary to request feedback and to contact you about your use of our Services. another user.
                    </p> </li>

                    <li> <p >
                      <BoldText> To send you marketing and promotional communications.</BoldText> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see  <NavLink to=""> &quot;WHAT ARE YOUR PRIVACY RIGHTS?&quot;</NavLink> below.
                    </p> </li>

                    <li> <p >
                      <BoldText> To deliver targeted advertising to you.</BoldText> We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more. For more information see our Cookie Notice: <NavLink to=""> http://www.ARC.lk/privacy.
                      </NavLink>
                    </p> </li>

                    <li> <p >
                      <BoldText> To protect our Services.</BoldText> We may We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention. 
                    </p> </li>

                    <li> <p >
                      <BoldText> To administer prize draws and competitions.</BoldText> We may process your information to administer prize draws and competitions.
                    </p> </li>

                    <li> <p >
                      <BoldText> To evaluate and improve our Services, products, marketing, and your experience.</BoldText> We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.
                    </p> </li>

                    <li> <p >
                      <BoldText> To identify usage trends.</BoldText> We may process information about how you use our Services to better understand how they are being used so we can improve them.
                    </p> </li>

                    <li> <p >
                      <BoldText> To determine the effectiveness of our marketing and promotional campaigns.</BoldText> We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.
                    </p> </li>

                    <li> <p >
                      <BoldText> To comply with our legal obligations.</BoldText>We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.
                    </p> </li>
                    </ul>
                </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </Accordion.Header>
                <Accordion.Body>
                <div className="text-top">
                   <p className="mb-3">
                      <BoldText> In Short:</BoldText>We may share information in specific situations described in this section and/or with the following categories of third parties.
                    </p>     
                    <p>
                      <BoldText>Vendors, Consultants, and Other Third-Party Service Providers.</BoldText>{" "}
                      We may share your data with third-party vendors, service providers, contractors, or agents (&quot;third parties&quot;) who perform services for us or on our behalf and require access to such information to do that work.The categories of third parties we may share personal information with are as follows:
                    </p>  
                    <ul className="mb-3" >
                      <li> Ad Networks </li>
                      <li> Affiliate Marketing Programs</li>
                      <li> Cloud Computing Services </li>
                      <li> Communication & Collaboration Tools </li>
                      <li> Data Analytics Services </li>
                      <li> Performance Monitoring Tools </li>
                      <li> Sales & Marketing Tools </li>
                      <li> Testing Tools </li>
                      <li> Data Storage Service Providers </li>
                      <li> User Account Registration & Authentication Services </li>
                    </ul>

                    <p>
                      We also may need to share your personal information in the following situations:
                    </p>  
                    <ul  >
                      <li> <p>
                      <BoldText> Business Transfers. </BoldText>We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                    </p>   </li>
                    
                    <li> <p>
                      <BoldText> When we use Google Analytics. </BoldText> We may share your information with Google Analytics to track and analyze the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit <NavLink to="https://tools.google.com/dlpage/gaoptout.">https://tools.google.com/dlpage/gaoptout.</NavLink>  For more information on the privacy practices of Google, please visit the Google Privacy & Terms page.
                    </p>   </li>

                    <li> <p>
                      <BoldText> Other Users. </BoldText> When you share personal information (for example, by posting comments, contributions, or other content to the Services) or otherwise interact with public areas of the Services, such personal information may be viewed by all users and may be publicly made available outside the Services in perpetuity.If you interact with other users of our Services and register for our Services through a social network (such as Facebook), your contacts on the social network will see your name, profile photo, and descriptions of your activity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our Services, and view your profile.
                    </p>   </li>

                    <li> <p>
                      <BoldText> Offer Wall. </BoldText> Our application(s) may display a third-party hosted &quot;offer wall.&quot; Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for the acceptance and completion of an advertisement offer. Such an offer wall may appear in our application(s) and be displayed to you based on certain data, such as your geographic area or demographic information. When you click on an offer wall, you will be brought to an external website belonging to other persons and will leave our application(s). A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account with the relevant reward.
                    </p>   </li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </Accordion.Header>
                <Accordion.Body>
                <div className="text-top">
                   <p className="mb-3">
                      <BoldText> In Short:</BoldText> 
                      We may use cookies and other tracking technologies to collect and store your information.
                    </p>   
                    <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice: <NavLink to="http://www.ARC.lk/privacy."> http://www.ARC.lk/privacy.</NavLink></p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                </Accordion.Header>
                <Accordion.Body>
                <div className="text-top">
                   <p className="mb-3">
                      <BoldText> In Short:</BoldText> 
                      If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.
                    </p>   
                    <p className="mb-3" >
                    Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
                    </p>

                    <p className="mb-3" >
                    We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  6. HOW LONG DO WE KEEP YOUR INFORMATION?
                </Accordion.Header>
                <Accordion.Body>
                <div className="text-top">
                   <p className="mb-3">
                      <BoldText> In Short:</BoldText> 
                      We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
                    </p>   
                    <p className="mb-3" >
                    We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
                    </p>

                    <p className="mb-3" >
                    When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  7. HOW DO WE KEEP YOUR INFORMATION SAFE?
                </Accordion.Header>
                <Accordion.Body>
                <div className="text-top">
                   <p className="mb-3">
                      <BoldText> In Short:</BoldText> 
                      We aim to protect your personal information through a system of organizational and technical security measures.
                    </p>   
                    <p className="mb-3" >
                    We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                    </p>

                   
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  8. WHAT ARE YOUR PRIVACY RIGHTS?
                </Accordion.Header>
                <Accordion.Body>
                <div className="text-top">
                   <p className="mb-3">
                      <BoldText> In Short:</BoldText> 
                      You may review, change, or terminate your account at any time.
                    </p>   
                    <p className="mb-3" >
                    <BoldText>  Withdrawing your consent:</BoldText>  If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section <NavLink to="">&quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?.&quot; </NavLink>
                    </p>

                    <p className="mb-3">
                    However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                    </p>

                    <p className="mb-3">
                    <BoldText>  Opting out of marketing and promotional communications:</BoldText> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
                    </p>

                    <p className="mb-3">
                    <BoldText>  Account Information</BoldText> 
                    </p>

                    <p >
                    If you would at any time like to review or change the information in your account or terminate your account, you can:
                    </p>
                    <ul>
                      <li>Log in to your account settings and update your user account.</li>
                    </ul> 
                    <p >
                    Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                    </p>
                    <p className="mb-3">
                    <BoldText> Cookies and similar technologies:</BoldText>  Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. For further information, please see our Cookie Notice: <NavLink to="http://www.ARC.lk/privacy.">http://www.ARC.lk/privacy.</NavLink>
                    </p>

                    
                   
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  9. CONTROLS FOR DO-NOT-TRACK FEATURES?
                </Accordion.Header>
                <Accordion.Body>
                <div className="text-top">       
                    <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="9">
                <Accordion.Header>
                  10. DO WE MAKE UPDATES TO THIS NOTICE?
                </Accordion.Header>
                <Accordion.Body>
                <div className="text-top">       
                    <p className="mb-3"> <BoldText> In Short:</BoldText>Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
                    <p>
                      
                      We may update this privacy notice from time to time. The updated version will be indicated by an updated &quot;Revised&quot; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="10">
                <Accordion.Header>
                  11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </Accordion.Header>
                <Accordion.Body>
                <div className="text-top">       
                    <p className="mb-3"> If you have questions or comments about this notice, you may contact us by post at:</p>
                    <p className="mb-3">
                    ARC (PVT) LTD
                     __________
                     
                    </p>
                    <p className="mb-3">
                      Wilpola <br/>
                      Aranayaka, Sabaragamuwa <br/>
                      Sri Lanka <br/>
                     </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="11">
                <Accordion.Header>
                  12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                  FROM YOU?
                </Accordion.Header>
                <Accordion.Body>
                <div className="text-top">       
                    <p className="mb-3"> Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it.To request to review, update, or delete your personal information, please fill out and submit a <NavLink to="">data subject access request.</NavLink></p>
                 
                    <p className="mb-3"> 
                    This privacy policy was created using {`Termly's`}Privacy Policy Generator.</p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;
