document.body.innerHTML = `
  <div class="wrapper" style="text-align: center; padding: 20px; animation: fadeIn 2s;">
    <h2 class="question" style="color: #e94d58; font-size: 2em; margin-bottom: 20px;">
      Mujhe pata tha tum mujhse pyaar karti ho 💕
    </h2>
    <img class="gif" alt="hug gif" src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" 
      style="max-width: 100%; height: auto; border-radius: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.2);"/>
  </div>
  <style>
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
`;