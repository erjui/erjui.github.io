---
permalink: /
title: "About Me"
excerpt: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% include language_toggle.html %}

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a **Research Scientist/Engineer** at <a href="https://vuno.co/" style="color: #7289da; text-decoration: none;">VUNO</a>. I obtained my Master's from the Graduate School of AI at KAIST, under the supervision of Prof. <a href="http://www.sungjuhwang.com/" style="color: #7289da; text-decoration: none;">Sung Ju Hwang</a>. If you are interested in collaborating with me on research projects, please contact me!

**My primary research interests** include solving important problems that occur in the real world across various domains. I interested in efficient data handling (e.g., few-shot learning, self-supervised learning, semi-supervised learning, and active learning paradigms). I'm also passionate about developing expert systems that enhance and complement large-scale AI frameworks such as Large Language Models (LLMs) and Multimodal Large Language Models (MLLMs), enabling them to achieve better performance on specialized tasks.

Outside of research, I enjoy learning new languages 📚 (currently studying <a href="#" onclick="toggleLanguage('spanish-content', document.querySelector('.spanish-btn')); return false;">**Spanish**</a> and <a href="#" onclick="toggleLanguage('chinese-content', document.querySelector('.chinese-btn')); return false;">**Chinese**</a>), swimming 🏊 (I try to swim at least twice a week), and continuous self-improvement and acceleration of personal growth in expertise and research.

<div class="language-toggle">
  <button class="toggle-btn spanish-btn" onclick="toggleLanguage('spanish-content', this)">🇪🇸 Ver en Español</button>
  <button class="toggle-btn chinese-btn" onclick="toggleLanguage('chinese-content', this)">🇨🇳 查看中文版</button>
</div>

<div id="spanish-content" class="language-section spanish-section" style="display: none;">
  <p>Soy un <strong>Científico/Ingeniero de Investigación</strong> en <a href="https://vuno.co/" style="color: #7289da; text-decoration: none;">VUNO</a>. Obtuve mi Maestría en la Escuela de Posgrado de IA de KAIST, bajo la supervisión del Prof. <a href="http://www.sungjuhwang.com/" style="color: #7289da; text-decoration: none;">Sung Ju Hwang</a>. ¡Si estás interesado en colaborar conmigo en proyectos de investigación, por favor contáctame!</p>

  <p><strong>Mis intereses principales de investigación</strong> incluyen resolver problemas importantes que ocurren en el mundo real a través de varios dominios. Me interesa el manejo eficiente de datos (por ejemplo, aprendizaje de pocos ejemplos, aprendizaje auto-supervisado, aprendizaje semi-supervisado, y paradigmas de aprendizaje activo). También me apasiona desarrollar sistemas expertos que mejoren y complementen marcos de IA a gran escala como los Modelos de Lenguaje Grande (LLMs) y los Modelos de Lenguaje Grande Multimodales (MLLMs), permitiéndoles lograr un mejor rendimiento en tareas especializadas.</p>

  <p>Fuera de la investigación, disfruto aprender nuevos idiomas 📚 (actualmente estudiando <strong>español</strong> y <strong>chino</strong>), nadar 🏊 (trato de nadar al menos dos veces por semana), y la mejora continua personal y la aceleración del crecimiento personal en experiencia e investigación.</p>
</div>

<div id="chinese-content" class="language-section chinese-section" style="display: none;">
  <p>我是<a href="https://vuno.co/" style="color: #7289da; text-decoration: none;">VUNO</a>的<strong>研究科学家/工程师</strong>。我在KAIST人工智能研究生院获得了硕士学位，师从<a href="http://www.sungjuhwang.com/" style="color: #7289da; text-decoration: none;">黄成柱</a>教授。如果您有兴趣与我在研究项目上合作，请随时联系我！</p>

  <p><strong>我的主要研究兴趣</strong>包括解决现实世界中各个领域出现的重要问题。我对高效数据处理感兴趣（例如，少样本学习、自监督学习、半监督学习和主动学习范式）。我还热衷于开发能够增强和补充大型AI框架（如大型语言模型（LLMs）和多模态大型语言模型（MLLMs））的专家系统，使它们能够在专业任务上取得更好的性能。</p>

  <p>除了研究之外，我喜欢学习新语言📚（目前正在学习<strong>西班牙语</strong>和<strong>中文</strong>），游泳🏊（我尽量每周游泳至少两次），以及在专业知识和研究方面不断自我提升和加速个人成长。</p>
</div>

# 🔥 News
- *2025.07*: &nbsp;🎉 Renewed personal website with latest information

# 📝 Publications 

- <font size="3">Simple Few-shot Semi-supervised Knowledge Distillation from Vision-Language Models via Dual-Head Optimization</font>
[[paper]](https://arxiv.org/abs/2505.07675v1) [[github]](https://github.com/erjui/DHO)  
**Seongjae Kang**, Dong Bok Lee, Hyungjoon Jang, Sung Ju Hwang  
<span style="color:purple">Under Review</span>

- <font size="3">PCoreSet: Effective Active Learning through Knowledge Distillation from Vision-Language Models</font>
[[paper]](https://arxiv.org/abs/2505.07675v1) [[github]](https://github.com/erjui/PCoreSet)  
**Seongjae Kang**, Dong Bok Lee, Hyungjoon Jang, Dongseop Kim, Sung Ju Hwang  
<span style="color:purple">Under Review</span>

# 📖 Education
- *2022.02 - 2024.02*, M.S. in Graduate School of AI, <a href="https://www.kaist.ac.kr/en/" style="color: #7289da; text-decoration: none;">KAIST</a>
- *2016.02 - 2022.02*, B.S. in Computer Science (major) and Electrical Engineering (minor), <a href="https://www.kaist.ac.kr/en/" style="color: #7289da; text-decoration: none;">KAIST</a>

# 💻 Work Experience
- *2024.05 - Present*, Research Scientist/Engineer (Military Substitution) at <a href="https://vuno.co/" style="color: #7289da; text-decoration: none;">VUNO</a>
- *2024.02 - 2024.03*, Research Scientist/Engineer at <a href="https://deepauto.ai/" style="color: #7289da; text-decoration: none;">Deepauto AI</a>
- *2020.09 - 2021.09*, Research Scientist/Engineer at <a href="https://www.voyagerx.com/" style="color: #7289da; text-decoration: none;">VoyagerX</a>
- *2019.03 - 2019.08*, Undergraduate Research Assistant at <a href="https://sgvr.kaist.ac.kr/" style="color: #7289da; text-decoration: none;">SGVR Lab</a>, KAIST, Daejeon, South Korea. Prof: <a href="https://sgvr.kaist.ac.kr/~sungeui/" style="color: #7289da; text-decoration: none;">Sung-eui Yoon</a>
- *2017.06 - 2018.06*, Undergraduate Research Assistant at <a href="http://mind.kaist.ac.kr" style="color: #7289da; text-decoration: none;">Computer Vision Lab</a>, KAIST, Daejeon, South Korea. Prof: Hyunseung Yang
