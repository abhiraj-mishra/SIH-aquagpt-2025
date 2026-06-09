![](./assets/photos/uiux%20main.png)

# AquaGPT

> An AI-powered chatbot for exploring and understanding India's groundwater and water resource data using natural language.


---

## Overview

AquaGPT is an intelligent AI assistant that enables users to access and understand India's groundwater resource information through simple conversations.

Instead of navigating complex GIS dashboards and datasets, users can ask questions in plain English and receive accurate, AI-generated responses backed by data from the IN-GRES (India Groundwater Resource Estimation System) platform.

The project combines modern AI, a responsive web interface, and groundwater datasets to make water-related information accessible to researchers, students, policymakers, government officials, and the general public.

---

## Key Features

### AI-Powered Conversations

Ask questions such as:

- What is the groundwater status of Uttar Pradesh?
- Which districts in Rajasthan are over-exploited?
- How much groundwater recharge occurred last year?
- Compare groundwater availability between Punjab and Haryana.

### Water Resource Intelligence

- Groundwater resource assessment
- Groundwater extraction statistics
- Recharge and replenishment data
- State-wise and district-wise analysis
- Groundwater categorization insights
- Historical trend analysis

### Data-Driven Responses

- Information sourced from the IN-GRES database
- Accurate and contextual answers
- Government-backed groundwater datasets
- Easy-to-understand explanations

### Modern User Experience

- Responsive Next.js interface
- Clean dark-themed design
- Fast conversational workflow
- Mobile-friendly UI

---

## Tech Stack

### Frontend

- Next.js
- React.js
- Tailwind CSS
- TypeScript

### Backend

- Node.js
- Express.js / Next.js API Routes
- Database Integration Layer

### AI Layer

- Google Gemini API
- Retrieval-Augmented Generation (RAG)
- Prompt Engineering

### Data Source

- IN-GRES (India Groundwater Resource Estimation System)
- IIT Hyderabad
- Central Ground Water Board (CGWB)

---

## System Architecture

```text
+-------------------+
|       User        |
+---------+---------+
          |
          v
+-------------------+
|   Next.js Frontend|
+---------+---------+
          |
          v
+-------------------+
|    Backend API    |
+---------+---------+
          |
    +-----+-----+
    |           |
    v           v
+--------+  +---------+
| Gemini |  | IN-GRES |
|   AI   |  | Database|
+--------+  +---------+
    |           |
    +-----+-----+
          |
          v
+-------------------+
| AI Generated Reply|
+-------------------+
```

---

## How It Works

1. User submits a question through the chat interface.
2. Backend processes the request.
3. Relevant groundwater data is fetched from the IN-GRES database.
4. Retrieved information is provided to Gemini as context.
5. Gemini generates a human-readable response.
6. The response is displayed in the chat interface.

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/aquagpt.git
cd aquagpt
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env.local` file:

```env
GEMINI_API_KEY=your_gemini_api_key

DATABASE_URL=your_database_connection_string

INGRES_API_URL=https://ingres.iith.ac.in
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Example Queries

```text
What is the groundwater status of Karnataka?
```

```text
Show groundwater extraction trends in Punjab.
```

```text
Which districts are categorized as over-exploited?
```

```text
Compare groundwater availability in Maharashtra and Gujarat.
```

```text
Explain annual groundwater recharge.
```

---

## Project Objectives

- Simplify access to groundwater information.
- Improve public awareness of water resources.
- Support research and policymaking.
- Enable data-driven decisions.
- Make government datasets easier to understand.

---

## Future Scope

- Voice Assistant Support
- Regional Language Support
- Interactive GIS Maps
- Water Quality Analysis
- Predictive Groundwater Analytics
- Mobile Application
- PDF Report Generation
- Advanced RAG Pipeline

---

## Repository Structure

```text
aquagpt/
│
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── services/
│   ├── api/
│   └── utils/
│
├── database/
├── docs/
├── .env.local
├── package.json
└── README.md
```

---

## Impact

AquaGPT bridges the gap between complex groundwater datasets and everyday users by providing a conversational interface for exploring India's water resources. The platform transforms technical groundwater assessments into actionable insights that can support education, planning, conservation, and decision-making.

---

## License

MIT License

---

## Team

**AquaGPT**

Making India's groundwater data accessible through AI.