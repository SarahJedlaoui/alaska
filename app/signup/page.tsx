"use client";
import Link from "next/link";
import { useState, FormEvent } from 'react';
import { Metadata } from "next";
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { TextField, Button, Alert } from '@mui/material';
type HistoryEntry = {
  question: string;
  response: string;
};


const SignupPage = () => {

  const [formData, setFormData] = useState({ question: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [response, setResponse] = useState('');
  const [conversationId, setConversationId] = useState('');
  const [conversationHistory, setConversationHistory] = useState<HistoryEntry[]>([]);


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowAlert(true);
    setResponse('');

    try {
      const res = await axios.post('https://leapback-d796b66e0016.herokuapp.com/api/assistant/message', {
        message: formData.question,
        conversation_id: conversationId
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.data && res.data.status === 'processing') {
        setConversationId(res.data.conversation_id);
        pollForResponse(res.data.conversation_id);
      }
    } catch (error) {
      console.error('Error while sending message:', error);
      setResponse('There was an error processing your request.');
      setShowAlert(false);
    }
  };

  const pollForResponse = async (conversationId: string) => {
    const intervalId = setInterval(async () => {
      try {
        const res = await axios.get(`https://leapback-d796b66e0016.herokuapp.com/api/assistant/check-status?conversation_id=${conversationId}`);

        if (res.data.status === 'completed') {
          clearInterval(intervalId);
          setResponse(res.data.responses); // Assuming responses are stored as an array
          const newHistoryEntry = { question: formData.question, response: res.data.responses };
          setConversationHistory([...conversationHistory, newHistoryEntry]);
          setFormData({ ...formData, question: '' });
          setShowAlert(false);
        }
      } catch (error) {
        console.error('Error while polling for response:', error);
        clearInterval(intervalId);
        setResponse('There was an error retrieving the response.');
        setShowAlert(false);
      }
    }, 5000); // Poll every 5 seconds
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-20 pt-48 md:pb-24 lg:pb-32 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Ask Leap Assistant
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  It’s totally free and super easy
                </p>


                {conversationHistory.map((entry, index) => (
                  <div key={index}>
                    <br></br>
                    <Alert severity="info" >
                      <Typography variant="h6" >{entry.question}</Typography>

                    </Alert>
                    <br></br>
                    <Alert severity="success" >
                      <Typography variant="h6" >{entry.response}</Typography>

                    </Alert>
                  </div>
                ))}
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Enter your question{" "}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.question}
                      onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                      placeholder="Enter your question"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>

                  <div className="mb-6">
                    <button type="submit" className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Send
                    </button>
                  </div>
                  {showAlert && (
                    <Alert severity="info" >
                      Your answer is on the way, please wait!
                    </Alert>
                  )}
                </form>

              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default SignupPage;
