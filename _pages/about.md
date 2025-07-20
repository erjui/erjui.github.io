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

Outside of research, I enjoy learning new languages 📚 (currently studying **Spanish** and **Chinese**), swimming 🏊 (I try to swim at least twice a week), and continuous self-improvement and acceleration of personal growth in expertise and research.

<div class="language-toggle">
  <button class="toggle-btn" onclick="document.getElementById('spanish-content').style.display = document.getElementById('spanish-content').style.display === 'none' || document.getElementById('spanish-content').style.display === '' ? 'block' : 'none'; this.innerHTML = document.getElementById('spanish-content').style.display === 'none' ? '🇪🇸 Ver en Español' : '🇺🇸 View in English';">🇪🇸 Ver en Español</button>
</div>

<div id="spanish-content" class="spanish-section" style="display: none;">
  <p>Soy un <strong>Científico/Ingeniero de Investigación</strong> en <a href="https://vuno.co/" style="color: #7289da; text-decoration: none;">VUNO</a>. Obtuve mi Maestría en la Escuela de Posgrado de IA de KAIST, bajo la supervisión del Prof. <a href="http://www.sungjuhwang.com/" style="color: #7289da; text-decoration: none;">Sung Ju Hwang</a>. ¡Si estás interesado en colaborar conmigo en proyectos de investigación, por favor contáctame!</p>

  <p><strong>Mis intereses principales de investigación</strong> incluyen resolver problemas importantes que ocurren en el mundo real a través de varios dominios. Me interesa el manejo eficiente de datos (por ejemplo, aprendizaje de pocos ejemplos, aprendizaje auto-supervisado, aprendizaje semi-supervisado, y paradigmas de aprendizaje activo). También me apasiona desarrollar sistemas expertos que mejoren y complementen marcos de IA a gran escala como los Modelos de Lenguaje Grande (LLMs) y los Modelos de Lenguaje Grande Multimodales (MLLMs), permitiéndoles lograr un mejor rendimiento en tareas especializadas.</p>

  <p>Fuera de la investigación, disfruto aprender nuevos idiomas 📚 (actualmente estudiando <strong>español</strong> y <strong>chino</strong>), nadar 🏊 (trato de nadar al menos dos veces por semana), y la mejora continua personal y la aceleración del crecimiento personal en experiencia e investigación.</p>
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
