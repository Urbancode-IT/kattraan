import React from "react";

const Disclaimer = () => {
  return (
    <div className="text-gray-800">
      <h1 className="text-4xl font-bold text-blue-700 mb-2">Disclaimer</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated: April 22, 2025</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Interpretation and Definitions</h2>

      <h3 className="text-xl font-medium mt-4 mb-1">Interpretation</h3>
      <p className="mb-4">
        The words of which the initial letter is capitalized have meanings defined under the following conditions.
        These definitions shall have the same meaning regardless of whether they appear in singular or plural.
      </p>

      <h3 className="text-xl font-medium mt-4 mb-1">Definitions</h3>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>Company:</strong> Kattraan LMS.</li>
        <li><strong>Service:</strong> The Website.</li>
        <li><strong>You:</strong> The individual or entity accessing the Service.</li>
        <li>
          <strong>Website:</strong>{" "}
          <a href="https://kattraan.com" className="text-blue-600" target="_blank" rel="noopener noreferrer">
            https://kattraan.com
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Disclaimer</h2>
      <p className="mb-4">The information contained on the Service is for general information purposes only.</p>
      <p className="mb-4">
        The Company assumes no responsibility for errors or omissions in the contents of the Service.
        In no event shall the Company be liable for any damages arising out of use or reliance on the content.
        The Company may change content at any time without notice.
        Created with the{" "}
        <a
          href="https://www.termsfeed.com/disclaimer-generator/"
          className="text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Disclaimer Generator
        </a>.
      </p>
      <p className="mb-4">The Company does not warrant the Service is free of harmful components or viruses.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">External Links Disclaimer</h2>
      <p className="mb-4">
        The Service may link to external sites not maintained or affiliated with the Company. We are not responsible for their content or policies.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Errors and Omissions Disclaimer</h2>
      <p className="mb-4">
        While the Company strives to provide accurate content, laws and regulations evolve. There may be delays, inaccuracies, or omissions.
        The Company is not liable for any resulting issues from relying on this content.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Fair Use Disclaimer</h2>
      <p className="mb-4">
        The Company may use copyrighted material under fair use for educational and informational purposes.
        If you'd like to use such material for other purposes, you must seek permission from the copyright owner.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Views Expressed Disclaimer</h2>
      <p className="mb-4">
        Views expressed on the Service are the authors’ own and not necessarily those of the Company or its partners.
        User comments are solely their responsibility.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">No Responsibility Disclaimer</h2>
      <p className="mb-4">
        The Company is not providing legal, tax, or other professional advice.
        Do not rely on the Service in place of professional consultation.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">"Use at Your Own Risk" Disclaimer</h2>
      <p className="mb-4">
        All information is provided "as is", without warranties of any kind.
        The Company will not be liable for decisions or actions based on this content.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h2>
      <ul className="list-disc list-inside mt-2 mb-10">
        <li>Email: <a href="mailto:admin@urbancode.in" className="text-blue-600">admin@urbancode.in</a></li>
      </ul>
    </div>
  );
};

export default Disclaimer;
