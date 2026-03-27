body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #000000, #0a1f44);
  color: white;
}

header {
  text-align: center;
  padding: 20px;
  font-size: 28px;
  font-weight: bold;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
}

.container {
  max-width: 700px;
  margin: 20px auto;
  padding: 20px;
  background: rgba(255,255,255,0.05);
  border-radius: 15px;
  box-shadow: 0 0 25px rgba(0,0,0,0.6);
}

input, button {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: none;
  border-radius: 8px;
  font-size: 16px;
}

input {
  background: #111;
  color: white;
}

button {
  background: #1e90ff;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #0d6efd;
}

.date-picker {
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0,0,0,0.6);
  padding: 12px;
  margin-top: 10px;
  border-radius: 10px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px);} 
  to { opacity: 1; transform: translateY(0);} 
}

.done {
  text-decoration: line-through;
  opacity: 0.5;
}

.actions button {
  width: auto;
  margin-left: 5px;
  padding: 6px 10px;
  font-size: 14px;
}

.check { background: #28a745; }
.delete { background: #dc3545; }

.stats {
  margin-top: 15px;
  font-size: 14px;
  opacity: 0.8;
  text-align: center;
    }
