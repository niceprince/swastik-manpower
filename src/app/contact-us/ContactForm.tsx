"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const SendingMail = () => {
  return (
    <button
      type="button"
      className="inline-flex cursor-not-allowed items-center rounded-md bg-indigo-500 px-4 py-2 text-sm leading-6 font-semibold text-white transition duration-150 ease-in-out hover:bg-indigo-400"
      disabled
    >
      <svg
        className="mr-3 -ml-1 size-5 animate-spin text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      Processing…
    </button>
  );
};

const initialState: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};
const ContactForm = () => {
  const [mailSending, setMailSending] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => {
      const { name, value } = event.target;
      const targetVal = value.trim();
      return { ...prev, [name]: targetVal };
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    (Object.keys(formData) as Array<keyof typeof formData>).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required!";
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validate()) {
      console.log("able to submit");
      setFormData(initialState);
      // try {
      //   const response = await fetch(
      //     "https://ripplesofhope.in/assets/smp-cquery.php",
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify(formData), // sending data
      //     },
      //   );

      //   const data = await response.json();
      //   console.log("✅ Success:", data.status, data.status === "success");
      //   if (data.status === "success") {
      //     setMailSending(false);
      //     setFormData(initialState);
      //     setResponseMsg("Mail send successfully...");
      //   } else {
      //     setMailSending(false);
      //     setResponseMsg("Something went wrong...");
      //   }
      // } catch (error) {
      //   setMailSending(false);
      //   setResponseMsg("There is some erorr to sending the mail, try again...");
      //   console.log("❌ Error:", error);
      // }
    } else {
      console.log(errors);
    }
  };

  return (
    <div className={styles.contactPage}>
      <section className={styles.contactPageSection}>
        <div className="container">
          <div className={styles.secTitle}>
            <h2>Let&apos;s Get in Touch.</h2>
          </div>
          <div className={styles.innerContainer}>
            <div className="row clearfix">
              <div className={`sm:col-6 lg:col-8 ${styles.formColumn}`}>
                <div className={styles.formInnerColumn}>
                  <div className={styles.contactForm}>
                    <form onSubmit={handleSubmit} id="contact-form">
                      <div className="row clearfix">
                        <div
                          className={`col-md-6 col-sm-6 co-xs-12 ${styles.formGroup}`}
                        >
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={handleChange}
                            required
                          />
                          {errors.name && (
                            <div className="text-red-600">{errors.name}</div>
                          )}
                        </div>
                        <div
                          className={`col-md-6 col-sm-6 co-xs-12 ${styles.formGroup}`}
                        >
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            required
                          />
                          {errors.email && (
                            <div className="text-red-600">{errors.email}</div>
                          )}
                        </div>

                        <div
                          className={`col-md-6 col-sm-6 co-xs-12 ${styles.formGroup}`}
                        >
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            onChange={handleChange}
                            required
                          />
                          {errors?.phone && (
                            <div className="text-red-600">{errors.phone}</div>
                          )}
                        </div>
                        <div
                          className={`col-md-6 col-sm-6 co-xs-12 ${styles.formGroup}`}
                        >
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            onChange={handleChange}
                            required
                          />
                          {errors.subject && (
                            <div className="text-red-600">{errors.subject}</div>
                          )}
                        </div>
                        <div
                          className={`col-md-12 col-sm-12 co-xs-12 ${styles.formGroup}`}
                        >
                          <textarea
                            name="message"
                            placeholder="Message"
                            onChange={handleChange}
                          />
                          {errors?.message && (
                            <div className="text-red-600">{errors.message}</div>
                          )}
                        </div>
                        <div
                          className={`col-md-12 col-sm-12 co-xs-12 ${styles.formGroup}`}
                        >
                          {/* Submit */}
                          <div className="w-full px-2">
                            {mailSending ? (
                              <SendingMail />
                            ) : (
                              <button type="submit" className={styles.themeBtn}>
                                Send Now
                              </button>
                            )}
                            {responseMsg && (
                              <p className="mt-2 text-green-500">
                                {responseMsg}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className={`sm:col-6 lg:col-4 ${styles.infoColumn}`}>
                <div className={styles.infoInnerColumn}>
                  <h2>
                    For more information& query about our services, Please
                    contact us:-
                  </h2>
                  <ul className={styles.listInfo}>
                    <li>
                      <svg
                        viewBox="0 0 64 64"
                        width="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="3"
                        stroke="#000000"
                        fill="none"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <circle cx="32" cy="18.14" r="11.14"></circle>
                          <path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z"></path>
                        </g>
                      </svg>
                      <strong>Contact Person:</strong>
                      <br /> Capt. Suresh Babu (Retd)
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                          <path
                            d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                          ></path>{" "}
                        </g>
                      </svg>
                      <strong>Email ID:</strong>
                      <br /> swastikmanpower1@gmail.com
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853"
                            stroke="#1C274C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
                            stroke="#1C274C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>{" "}
                          <path
                            d="M15.1008 15.0272L15.6446 15.5437V15.5437L15.1008 15.0272ZM15.5562 14.5477L15.0124 14.0312V14.0312L15.5562 14.5477ZM17.9729 14.2123L17.5987 14.8623H17.5987L17.9729 14.2123ZM19.8834 15.312L19.5092 15.962L19.8834 15.312ZM20.4217 18.7584L20.9655 19.275L20.9655 19.2749L20.4217 18.7584ZM19.0012 20.254L18.4574 19.7375L19.0012 20.254ZM17.6763 20.9631L17.75 21.7095L17.6763 20.9631ZM7.8154 16.4752L8.3592 15.9587L7.8154 16.4752ZM3.75185 6.92574C3.72965 6.51212 3.37635 6.19481 2.96273 6.21701C2.54911 6.23921 2.23181 6.59252 2.25401 7.00613L3.75185 6.92574ZM9.19075 8.80507L9.73454 9.32159L9.19075 8.80507ZM9.47756 8.50311L10.0214 9.01963L9.47756 8.50311ZM9.63428 5.6931L10.2467 5.26012L9.63428 5.6931ZM8.3733 3.90961L7.7609 4.3426V4.3426L8.3733 3.90961ZM4.7177 3.09213C4.43244 3.39246 4.44465 3.86717 4.74498 4.15244C5.04531 4.4377 5.52002 4.42549 5.80529 4.12516L4.7177 3.09213ZM11.0632 13.0559L11.607 12.5394L11.0632 13.0559ZM10.6641 19.8123C11.0148 20.0327 11.4778 19.9271 11.6982 19.5764C11.9186 19.2257 11.8129 18.7627 11.4622 18.5423L10.6641 19.8123ZM15.113 20.0584C14.7076 19.9735 14.3101 20.2334 14.2252 20.6388C14.1403 21.0442 14.4001 21.4417 14.8056 21.5266L15.113 20.0584ZM15.6446 15.5437L16.1 15.0642L15.0124 14.0312L14.557 14.5107L15.6446 15.5437ZM17.5987 14.8623L19.5092 15.962L20.2575 14.662L18.347 13.5623L17.5987 14.8623ZM19.8779 18.2419L18.4574 19.7375L19.545 20.7705L20.9655 19.275L19.8779 18.2419ZM8.3592 15.9587C4.48307 11.8778 3.83289 8.43556 3.75185 6.92574L2.25401 7.00613C2.35326 8.85536 3.13844 12.6403 7.27161 16.9917L8.3592 15.9587ZM9.73454 9.32159L10.0214 9.01963L8.93377 7.9866L8.64695 8.28856L9.73454 9.32159ZM10.2467 5.26012L8.98569 3.47663L7.7609 4.3426L9.02189 6.12608L10.2467 5.26012ZM9.19075 8.80507C8.64695 8.28856 8.64626 8.28929 8.64556 8.29002C8.64533 8.29028 8.64463 8.29102 8.64415 8.29152C8.6432 8.29254 8.64223 8.29357 8.64125 8.29463C8.63928 8.29675 8.63724 8.29896 8.63515 8.30127C8.63095 8.30588 8.6265 8.31087 8.62182 8.31625C8.61247 8.32701 8.60219 8.33931 8.5912 8.3532C8.56922 8.38098 8.54435 8.41511 8.51826 8.45588C8.46595 8.53764 8.40921 8.64531 8.36117 8.78033C8.26346 9.0549 8.21022 9.4185 8.27675 9.87257C8.40746 10.7647 8.99202 11.9644 10.5194 13.5724L11.607 12.5394C10.1793 11.0363 9.82765 10.1106 9.7609 9.65511C9.72871 9.43536 9.76142 9.31957 9.77436 9.28321C9.78163 9.26277 9.78639 9.25709 9.78174 9.26437C9.77948 9.26789 9.77498 9.27451 9.76742 9.28407C9.76363 9.28885 9.75908 9.29437 9.75364 9.30063C9.75092 9.30375 9.74798 9.30706 9.7448 9.31056C9.74321 9.31231 9.74156 9.3141 9.73985 9.31594C9.739 9.31686 9.73813 9.31779 9.73724 9.31873C9.7368 9.3192 9.73612 9.31992 9.7359 9.32015C9.73522 9.32087 9.73454 9.32159 9.19075 8.80507ZM10.5194 13.5724C12.0422 15.1757 13.1924 15.806 14.0699 15.9485C14.5201 16.0216 14.8846 15.9632 15.1606 15.8544C15.2955 15.8012 15.4023 15.7387 15.4824 15.6819C15.5223 15.6535 15.5556 15.6266 15.5825 15.6031C15.5959 15.5913 15.6078 15.5803 15.6181 15.5703C15.6233 15.5654 15.628 15.5606 15.6324 15.5562C15.6346 15.554 15.6368 15.5518 15.6388 15.5497C15.6398 15.5487 15.6408 15.5477 15.6417 15.5467C15.6422 15.5462 15.6429 15.5454 15.6432 15.5452C15.6439 15.5444 15.6446 15.5437 15.1008 15.0272C14.557 14.5107 14.5577 14.51 14.5583 14.5093C14.5586 14.509 14.5592 14.5083 14.5597 14.5078C14.5606 14.5069 14.5615 14.506 14.5623 14.5051C14.5641 14.5033 14.5658 14.5015 14.5675 14.4998C14.5708 14.4965 14.574 14.4933 14.577 14.4904C14.5831 14.4846 14.5885 14.4796 14.5933 14.4754C14.6029 14.467 14.61 14.4616 14.6146 14.4584C14.6239 14.4517 14.623 14.454 14.6102 14.459C14.5909 14.4666 14.5001 14.4987 14.3103 14.4679C13.9078 14.4025 13.0391 14.0472 11.607 12.5394L10.5194 13.5724ZM8.98569 3.47663C7.9721 2.04305 5.94388 1.80119 4.7177 3.09213L5.80529 4.12516C6.32812 3.57471 7.24855 3.61795 7.7609 4.3426L8.98569 3.47663ZM18.4574 19.7375C18.1783 20.0313 17.8864 20.1887 17.6026 20.2167L17.75 21.7095C18.497 21.6357 19.1016 21.2373 19.545 20.7705L18.4574 19.7375ZM10.0214 9.01963C10.9889 8.00095 11.0574 6.40678 10.2467 5.26012L9.02189 6.12608C9.44404 6.72315 9.3793 7.51753 8.93377 7.9866L10.0214 9.01963ZM19.5092 15.962C20.3301 16.4345 20.4907 17.5968 19.8779 18.2419L20.9655 19.2749C22.2705 17.901 21.8904 15.6019 20.2575 14.662L19.5092 15.962ZM16.1 15.0642C16.4854 14.6584 17.086 14.5672 17.5987 14.8623L18.347 13.5623C17.2485 12.93 15.8862 13.1113 15.0124 14.0312L16.1 15.0642ZM11.4622 18.5423C10.4785 17.9241 9.43149 17.0876 8.3592 15.9587L7.27161 16.9917C8.42564 18.2067 9.56897 19.1241 10.6641 19.8123L11.4622 18.5423ZM17.6026 20.2167C17.0561 20.2707 16.1912 20.2842 15.113 20.0584L14.8056 21.5266C16.0541 21.788 17.0742 21.7762 17.75 21.7095L17.6026 20.2167Z"
                            fill="#1C274C"
                          ></path>{" "}
                        </g>
                      </svg>
                      <strong>Contact Number:</strong>
                      <br />
                      8527360876
                    </li>
                    <li>
                      <svg
                        fill="#000000"
                        version="1.1"
                        width={24}
                        id="Ebene_1"
                        viewBox="0 0 64 64"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <path d="M62,5H2C0.896,5,0,5.896,0,7v50c0,1.104,0.896,2,2,2h60c1.104,0,2-0.896,2-2V7C64,5.896,63.104,5,62,5z M60,9v8H4V9H60z M4,55V21h56v34H4z"></path>{" "}
                            <path d="M10,15c0.52,0,1.04-0.21,1.41-0.59C11.79,14.04,12,13.52,12,13s-0.21-1.04-0.59-1.42c-0.74-0.74-2.08-0.74-2.83,0.01 C8.21,11.96,8,12.47,8,13c0,0.53,0.21,1.04,0.59,1.42C8.96,14.79,9.479,15,10,15z"></path>{" "}
                            <path d="M16,15c0.52,0,1.04-0.21,1.42-0.59C17.79,14.04,18,13.52,18,13s-0.21-1.04-0.59-1.42c-0.74-0.74-2.08-0.74-2.83,0.01 C14.21,11.96,14,12.48,14,13s0.21,1.04,0.59,1.42C14.96,14.79,15.479,15,16,15z"></path>{" "}
                            <path d="M22,15c0.53,0,1.04-0.21,1.41-0.59C23.79,14.04,24,13.53,24,13c0-0.52-0.21-1.04-0.59-1.42c-0.74-0.74-2.08-0.74-2.83,0.01 C20.21,11.96,20,12.48,20,13c0,0.53,0.21,1.04,0.59,1.41C20.96,14.79,21.479,15,22,15z"></path>{" "}
                            <path d="M31,25H10c-1.104,0-2,0.896-2,2s0.896,2,2,2h21c1.104,0,2-0.896,2-2S32.104,25,31,25z"></path>{" "}
                            <path d="M31,33H10c-1.104,0-2,0.896-2,2s0.896,2,2,2h21c1.104,0,2-0.896,2-2S32.104,33,31,33z"></path>{" "}
                            <path d="M31,41H10c-1.104,0-2,0.896-2,2s0.896,2,2,2h21c1.104,0,2-0.896,2-2S32.104,41,31,41z"></path>{" "}
                            <path d="M54,25H39c-1.104,0-2,0.896-2,2v16c0,1.104,0.896,2,2,2h15c1.104,0,2-0.896,2-2V27C56,25.896,55.104,25,54,25z M52,41H41 V29h11V41z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                      <strong>Company Website:</strong>
                      <br />
                      <a href="www.swastikmanpower.com">
                        www.swastikmanpower.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
