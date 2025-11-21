# Real-Time System Health Dashboard

A real-time dashboard that monitors live system metrics such as CPU Load, Memory Usage, Uptime, Active Processes, API Latency, and Error Rate.  
Data updates every **1 second** using **WebSockets (Socket.io)** and is visualized using **Recharts**.

This project demonstrates full-stack development, real-time communication, clean UI design, and data visualization — ideal for internships and engineering roles.

---

## Features

### System Metrics (Live)
- **CPU Load (1-minute load average)**
- **Memory Usage (%)**
- **System Uptime**
- **Active Processes (simulated)**
- **API Latency (simulated)**
- **Error Rate (simulated)**

### Real-Time Communication
- Backend sends updates every **1000ms** using `socket.io`.
- React frontend listens and updates UI instantly.

### Visualizations
- Real-time line charts for:
  - CPU Load History
  - Memory Usage History
- Smooth animations and responsive design.

### Modular Architecture
- Reusable `MetricCard` component
- `LineChartComponent` for dynamic graphs
- Clean separation of server and client folders

---

## Tech Stack

### **Frontend**
- React.js  
- Tailwind CSS  
- Recharts  
- Socket.io-client  

### **Backend**
- Node.js  
- Express  
- Socket.io  
- OS module (to fetch system stats)  

---
