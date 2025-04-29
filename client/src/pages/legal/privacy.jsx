import React from "react";

const Privacy = () => {
  return (
    <div className="text-gray-800">
      <h1 className="text-4xl font-bold text-blue-700 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated: April 22, 2025</p>

      <p className="mb-4">
        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
        information when You use the Service and tells You about Your privacy rights and how the law protects You.
      </p>
      <p className="mb-4">
        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection
        and use of information in accordance with this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Interpretation and Definitions</h2>
      <h3 className="text-xl font-medium mt-4 mb-1">Interpretation</h3>
      <p className="mb-4">
        The words of which the initial letter is capitalized have meanings defined under the following conditions...
      </p>

      <h3 className="text-xl font-medium mt-4 mb-1">Definitions</h3>
      <p className="mb-4">For the purposes of this Privacy Policy:</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>Account:</strong> unique account to access the Service.</li>
        <li><strong>Affiliate:</strong> organization with shared control or ownership.</li>
        <li><strong>Company:</strong> Kattraan LMS.</li>
        <li><strong>Cookies:</strong> files stored on your device to track activity.</li>
        <li><strong>Country:</strong> Tamil Nadu, India</li>
        <li><strong>Device:</strong> any digital device used to access the Service.</li>
        <li><strong>Personal Data:</strong> information relating to an identifiable person.</li>
        <li><strong>Service:</strong> refers to the Kattraan LMS Website.</li>
        <li><strong>Service Provider:</strong> third-party that processes data on behalf of the Company.</li>
        <li><strong>Usage Data:</strong> data collected automatically like visit duration, pages visited, etc.</li>
        <li>
          <strong>Website:</strong>{" "}
          <a
            href="https://kattraan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            https://kattraan.com
          </a>
        </li>
        <li><strong>You:</strong> the user of the Service.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Collecting and Using Your Personal Data</h2>
      <h3 className="text-xl font-medium mt-4 mb-1">Types of Data Collected</h3>

      <h4 className="font-semibold mt-4 mb-1">Personal Data</h4>
      <p className="mb-2">We may collect:</p>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>Email address</li>
        <li>Phone number</li>
        <li>Usage Data</li>
      </ul>

      <h4 className="font-semibold mt-4 mb-1">Usage Data</h4>
      <p className="mb-4">Automatically collected, such as IP address, browser info, pages visited, etc.</p>

      <h4 className="font-semibold mt-4 mb-1">Tracking Technologies and Cookies</h4>
      <p className="mb-4">We use Cookies and similar tech for analytics and personalization...</p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>Session Cookies:</strong> essential for Service operation.</li>
        <li><strong>Persistent Cookies:</strong> remember user preferences.</li>
        <li><strong>Web Beacons:</strong> used for analytics and tracking interactions.</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-1">Use of Your Personal Data</h3>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>To provide and maintain the Service</li>
        <li>To manage Your Account</li>
        <li>To contact You with updates or offers</li>
        <li>To fulfill contracts or purchases</li>
        <li>To manage Your requests</li>
        <li>To conduct business transfers or legal obligations</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-1">Retention and Deletion</h3>
      <p className="mb-4">We retain data only as long as necessary for legal or operational reasons.</p>

      <h3 className="text-xl font-medium mt-6 mb-1">Transfer of Your Personal Data</h3>
      <p className="mb-4">
        Your data may be transferred internationally where protection laws differ. We ensure all safeguards are in
        place.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-1">Delete Your Personal Data</h3>
      <p className="mb-4">
        You may request deletion of your data via account settings or by contacting us, subject to legal obligations.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-1">Disclosure of Your Personal Data</h3>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>For business transactions (e.g., mergers)</li>
        <li>For legal obligations or requests</li>
        <li>To protect rights or prevent harm</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-1">Security of Your Personal Data</h3>
      <p className="mb-4">
        We follow best practices but cannot guarantee 100% security of your data online.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Children's Privacy</h2>
      <p className="mb-4">
        We do not knowingly collect data from anyone under 13. Parents should contact us if they believe their child has
        submitted personal data.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Links to Other Websites</h2>
      <p className="mb-4">
        We are not responsible for the privacy policies or practices of third-party websites we link to.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Changes to this Privacy Policy</h2>
      <p className="mb-4">
        We may update this policy from time to time and will notify users via the Service or email.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h2>
      <ul className="list-disc list-inside mt-2 mb-10">
        <li>Email: <a href="mailto:admin@urbancode.in" className="text-blue-600">admin@urbancode.in</a></li>
      </ul>
    </div>
  );
};

export default Privacy;
