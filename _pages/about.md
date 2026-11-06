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

I am a **Machine Learning Engineer** at <a href="https://mtch.com/" style="color: #7289da; text-decoration: none;">Match Group</a> (MG AI). Previously, I was a Research Scientist/Engineer at <a href="https://vuno.co/" style="color: #7289da; text-decoration: none;">VUNO</a>. I obtained my Master's from the Graduate School of AI at KAIST, under the supervision of Prof. <a href="http://www.sungjuhwang.com/" style="color: #7289da; text-decoration: none;">Sung Ju Hwang</a>. If you are interested in collaborating with me on research projects, please contact me! Here is my <a href="/assets/cv.pdf" style="color: #7289da; text-decoration: none;">CV (Curriculum Vitae)</a>.

AI systems must account for human requirements that may be implicit, differ across stakeholders, or change through use. I am interested in understanding and representing these requirements so they can guide model learning and system behavior while remaining open to human revision.

- **Understanding and representing human requirements**. Inferring candidate requirements from partial instructions, demonstrations, corrections, and interaction histories, retaining the evidence and scope supporting an interpretation, and representing requirements in forms people can inspect and correct.
- **Adapting learning and behavior**. Translating requirements into objectives and constraints, carrying revisions through model learning and system behavior, and evaluating whether intended changes take effect while continuing to satisfy applicable requirements and preserving human authority over consequential tradeoffs.

Outside of research, I enjoy learning new languages 📚 (currently studying <a href="#" onclick="toggleLanguage('spanish-content', document.querySelector('.spanish-btn')); return false;">**Spanish**</a> and <a href="#" onclick="toggleLanguage('chinese-content', document.querySelector('.chinese-btn')); return false;">**Chinese**</a>), swimming 🏊 (been doing for a long time), and continuous self-improvement and acceleration of personal growth in expertise and research.

<div class="language-toggle">
  <button class="toggle-btn spanish-btn" onclick="toggleLanguage('spanish-content', this)">🇪🇸 Ver en Español</button>
  <button class="toggle-btn chinese-btn" onclick="toggleLanguage('chinese-content', this)">🇨🇳 查看中文版</button>
  <button class="toggle-btn korean-btn" onclick="toggleLanguage('korean-content', this)">🇰🇷 한국어로 보기</button>
</div>

<div id="spanish-content" class="language-section spanish-section" style="display: none;">
  <p>Soy un <strong>Ingeniero de Aprendizaje Automático</strong> en <a href="https://mtch.com/" style="color: #7289da; text-decoration: none;">Match Group</a> (MG AI). Anteriormente fui Científico/Ingeniero de Investigación en <a href="https://vuno.co/" style="color: #7289da; text-decoration: none;">VUNO</a>. Obtuve mi Maestría en la Escuela de Posgrado de IA de KAIST, bajo la supervisión del Prof. <a href="http://www.sungjuhwang.com/" style="color: #7289da; text-decoration: none;">Sung Ju Hwang</a>. ¡Si estás interesado en colaborar conmigo en proyectos de investigación, por favor contáctame!</p>

  <p>Los sistemas de IA deben tener en cuenta requisitos humanos que pueden ser implícitos, variar entre las personas involucradas o cambiar con el uso. Me interesa comprender y representar estos requisitos para que orienten el aprendizaje de los modelos y el comportamiento de los sistemas, y para que las personas puedan revisarlos. Mi investigación se centra en inferir posibles requisitos a partir de instrucciones parciales, demostraciones, correcciones e historiales de interacción, conservando la evidencia y el alcance de cada interpretación. También me interesa traducir estos requisitos en objetivos y restricciones, incorporar sus revisiones en los modelos y sistemas, y evaluar si los cambios tienen el efecto previsto sin dejar de cumplir los requisitos aplicables ni quitar a las personas la autoridad sobre decisiones importantes.</p>

  <p>Fuera de la investigación, disfruto aprender nuevos idiomas 📚 (actualmente estudiando <strong>español</strong> y <strong>chino</strong>), nadar 🏊 (trato de nadar al menos dos veces por semana), y la mejora continua personal y la aceleración del crecimiento personal en experiencia e investigación.</p>
</div>

<div id="chinese-content" class="language-section chinese-section" style="display: none;">
  <p>我是<a href="https://mtch.com/" style="color: #7289da; text-decoration: none;">Match Group</a>（MG AI）的<strong>机器学习工程师</strong>，此前曾在<a href="https://vuno.co/" style="color: #7289da; text-decoration: none;">VUNO</a>担任研究科学家/工程师。我在KAIST人工智能研究生院获得了硕士学位，师从<a href="http://www.sungjuhwang.com/" style="color: #7289da; text-decoration: none;">Sung Ju Hwang</a>教授。如果您有兴趣与我在研究项目上合作，请随时联系我！</p>

  <p>AI系统需要考虑人的要求，而这些要求可能是隐含的，可能因利益相关者而异，也可能在使用过程中发生变化。我希望理解并表示这些要求，使其能够指导模型学习和系统行为，同时允许人们审查和修改。我关注如何从不完整的指令、示范、纠正和交互历史中推断可能的要求，保留支持每种解释的证据及其适用范围，并以便于人们检查和纠正的形式表示这些要求。我也关注如何将要求转化为目标和约束，将修订落实到模型学习和系统行为中，并评估预期的改变是否生效，同时继续满足仍然适用的要求，让人们保有对重要权衡的决定权。</p>

  <p>除了研究之外，我喜欢学习新语言📚（目前正在学习<strong>西班牙语</strong>和<strong>中文</strong>），游泳🏊（我尽量每周游泳至少两次），以及在专业知识和研究方面不断自我提升和加速个人成长。</p>
</div>

<div id="korean-content" class="language-section korean-section" style="display: none;">
  <p>현재 <a href="https://mtch.com/" style="color: #7289da; text-decoration: none;">Match Group</a> (MG AI)에서 머신러닝 엔지니어(전문연구요원)로 일하고 있습니다. 이전에는 <a href="https://vuno.co/" style="color: #7289da; text-decoration: none;">VUNO</a>에서 전문연구요원으로 일했습니다. KAIST 인공지능대학원에서 <a href="http://www.sungjuhwang.com/" style="color: #7289da; text-decoration: none;">황성주</a> 교수님 지도로 석사학위를 받았습니다. 연구 협업에 관심 있으시면 언제든지 연락주세요!</p>

  <p>AI 시스템은 명시되지 않은 요구, 이해관계자마다 다른 요구, 사용 과정에서 바뀌는 요구를 다룰 수 있어야 합니다. 저는 이러한 요구를 이해하고 표현하여 모델 학습과 시스템 행동에 반영하면서도, 사람이 그 해석을 검토하고 수정할 수 있도록 하는 데 관심이 있습니다. 불완전한 지시, 시범, 수정 피드백, 상호작용 기록에서 가능한 요구를 추론하고, 각 해석을 뒷받침하는 근거와 적용 범위를 보존하는 방법을 연구하고자 합니다. 또한 요구를 목표와 제약으로 옮기고, 수정된 요구를 모델 학습과 시스템 행동에 반영하며, 기존에 적용되는 요구를 계속 충족하면서 의도한 변화가 실제로 이루어졌는지 평가하는 데 관심이 있습니다. 이 과정에서 중요한 절충에 대한 결정권은 사람이 유지해야 합니다.</p>

  <p>연구 외에도 새로운 언어 배우는 걸 정말 좋아하고 수영도 오래전부터 즐겨오고 있습니다! 개인적인 성장과 발전에도 항상 관심이 많습니다 🌱✨.</p>

  <p>감사합니다 🙇</p>
</div>

<span class="anchor" id="news"></span>

# 🔥 News
- *2026*: &nbsp;🎉 Two papers accepted at <strong>NeurIPS 2026</strong>!
- *2026*: &nbsp;🎉 CostNav accepted at <strong>CoRL 2026</strong>, following its presentation at the ScaleBot Workshop at CVPR 2026.
- *2026.06*: &nbsp;🎉 One paper accepted at <strong>ML for Audio Workshop @ ICML 2026</strong>!
- *2026.05*: &nbsp;🎉 One paper accepted at <strong>ScaleBot Workshop @ CVPR 2026</strong>!
- *2026.01*: &nbsp;🎉 One paper accepted at <strong>ICLR 2026</strong>!
- *2025.07*: &nbsp;🎉 Renewed personal website with latest information

<span class="anchor" id="publications"></span>

# 📝 Selected Publications

- <font size="3">Simple yet Effective Semi-supervised Knowledge Distillation from Vision-Language Models via Dual-Head Optimization</font>
[[paper]](https://arxiv.org/abs/2505.07675) [[project page]](https://huggingface.co/papers/2505.07675) [[github]](https://github.com/erjui/DHO)  \
**Seongjae Kang** *, Dong Bok Lee *, Hyungjoon Jang, Sung Ju Hwang (\* equal contribution)  \
<span style="color:purple">NeurIPS 2026</span>

- <font size="3">Deconstructing Multi-Task Active Learning: The Paradox of Gradient Conflict and Orthogonal Decomposition</font>
[[paper]](https://arxiv.org/abs/2610.23623) [[project page]](https://juho-jung.github.io/multitask_active_learning_official/)  \
Juho Jung *, **Seongjae Kang** *, Jinyoung Han (\* equal contribution)  \
<span style="color:purple">NeurIPS 2026</span>

- <font size="3">CostNav: A Navigation Benchmark for Real-World Economic-Cost Evaluation of Physical AI Agents</font>
[[paper]](https://arxiv.org/abs/2511.20216) [[project page]](https://worv-ai.github.io/costnav/) [[blog]](https://worv.ghost.io/costnav-2/) [[github]](https://github.com/worv-ai/CostNav)  \
Haebin Seong, Sungmin Kim, Yongjun Cho, Myunchul Joe, ..., **Seongjae Kang**, ..., Youngjae Yu, Yunsung Lee  \
<span style="color:purple">CoRL 2026. Also presented at the ScaleBot Workshop at CVPR 2026.</span>

- <font size="3">Frequency-Balanced Retinal Representation Learning with Mutual Information Regularization</font>
[[paper]](https://openreview.net/pdf?id=K5tcKEQaUr) [[github]](https://github.com/vuno/RetMAE)  \
Seunghoon Lee, **Seongjae Kang**, Inhyuk Park, Gitaek Kwon, Jihyeon Baek, Doohyun Park  \
<span style="color:purple">ICLR 2026</span>

- <font size="3">High-Suspicion Pulmonary Nodule Detection on Chest Radiographs: Single-Center Retrospective Performance and Additional Detection Analysis of an AI System</font>
[[poster]](https://dx.doi.org/10.26044/ecr2026/C-19405)  \
Y. Hwang, S. Ham, Y. Jun, J. Kang, S. Cho, **S. Kang**, S. H. Lee  \
<span style="color:purple">ECR 2026 (Scientific Exhibit)</span>

- <font size="3">PolicyGuide: From Guarding One Action to Guiding the Whole Workflow for Policy-Compliant LLM Agents</font>
[[paper]](https://arxiv.org/abs/2608.19861) [[project page]](https://policyguide.github.io/)  \
**Seongjae Kang**, Taehyung Yu, Sung Ju Hwang  \
<span style="color:purple">Who Verifies the Agents? Toward Reliable Agent Development, NeurIPS 2026 Workshop</span>

- <font size="3">PolicyGuard: A Dialogue-Grounded Sub-Agent Verifier for Policy Adherence in LLM Agents</font>
[[paper]](https://arxiv.org/abs/2606.29225) [[project page]](https://huggingface.co/papers/2606.29225)  \
**Seongjae Kang**, Taehyung Yu, Sung Ju Hwang  \
<span style="color:purple">Who Verifies the Agents? Toward Reliable Agent Development, NeurIPS 2026 Workshop</span>

- <font size="3">Best-of-N TTS Evaluation is Confounded by ASR Family Alignment</font>
Taehyung Yu, **Seongjae Kang**  \
<span style="color:purple">ML for Audio Workshop @ ICML 2026</span>

- <font size="3">Automated Structured Radiology Report Generation with Rich Clinical Context</font>
[[paper]](https://arxiv.org/abs/2510.00428) [[project page]](https://huggingface.co/papers/2510.00428) [[github]](https://github.com/vuno/contextualized-srrg)  \
**Seongjae Kang** *, Dong Bok Lee *, Juho Jung, Dongseop Kim, Won Hwa Kim, Sunghoon Joo (\* equal contribution)  \
<span style="color:purple">Under review at NAACL 2027</span>

- <font size="3">PCoreSet: Effective Active Learning through Knowledge Distillation from Vision-Language Models</font>
[[paper]](https://arxiv.org/abs/2506.00910) [[project page]](https://huggingface.co/papers/2506.00910) [[github]](https://github.com/erjui/PCoreSet)  \
**Seongjae Kang** *, Dong Bok Lee *, Hyungjoon Jang, Dongseop Kim, Sung Ju Hwang (\* equal contribution)  \
<span style="color:purple">Under review at CVPR 2027</span>

<span class="anchor" id="education"></span>

# 📖 Education
- *2022.02 - 2024.02*, M.S. in Graduate School of AI, <a href="https://www.kaist.ac.kr/en/" style="color: #7289da; text-decoration: none;">KAIST</a>
- *2016.02 - 2022.02*, B.S. in Computer Science (major) and Electrical Engineering (minor), <a href="https://www.kaist.ac.kr/en/" style="color: #7289da; text-decoration: none;">KAIST</a>

<span class="anchor" id="experience"></span>

# 💻 Work Experience
- *2026.05 - Present*, Machine Learning Engineer (Military Alternative Service) at <a href="https://mtch.com/" style="color: #7289da; text-decoration: none;">Match Group</a> (MG AI)
- *2024.05 - 2026.05*, Research Scientist/Engineer (Military Alternative Service) at <a href="https://vuno.co/" style="color: #7289da; text-decoration: none;">VUNO</a>
- *2024.02 - 2024.03*, Research Scientist/Engineer at <a href="https://deepauto.ai/" style="color: #7289da; text-decoration: none;">Deepauto AI</a>
- *2020.09 - 2021.09*, Research Engineer (Internship) at <a href="https://www.voyagerx.com/" style="color: #7289da; text-decoration: none;">VoyagerX</a>
- *2019.03 - 2019.08*, Undergraduate Research Assistant at <a href="https://sgvr.kaist.ac.kr/" style="color: #7289da; text-decoration: none;">SGVR Lab</a>, KAIST, Daejeon, South Korea. Prof: <a href="https://sgvr.kaist.ac.kr/~sungeui/" style="color: #7289da; text-decoration: none;">Sung-eui Yoon</a>
- *2017.06 - 2018.06*, Undergraduate Research Assistant at <a href="http://mind.kaist.ac.kr" style="color: #7289da; text-decoration: none;">Computer Vision Lab</a>, KAIST, Daejeon, South Korea. Prof: Hyunseung Yang

<span class="anchor" id="awards"></span>

# 🏅 Awards & Honors
- *2018 to 2021*, Korea National Science & Technology Scholarship, Ministry of Science and ICT, Republic of Korea. National merit scholarship covering full tuition.
- *2021*, 1st Prize, Semantic Segmentation AI Model for Body Parts Challenge, Alchera, AI Heroes.
- Linux Master 1st Grade Certificate, Korea Information Technology Human Resources Development Institute.

<span class="anchor" id="service"></span>

# 🎓 Academic Service
- *2026*, Conference reviewer for ICML (<strong>Gold Reviewer</strong>), NeurIPS, and AAAI.

<span class="anchor" id="projects"></span>

# 🚀 Selected Projects
- **ScreenTranslate for macOS**  \
[[Website]](https://screentranslate.filient.ai/) [[GitHub]](https://github.com/hcmhcs/screenTranslate) [[Product Hunt]](https://www.producthunt.com/products/screentranslate)  \
A native macOS menu bar app that translates text in images, PDFs, applications, and videos through a keyboard shortcut. It combines screen capture, on-device OCR, and Apple's Translation framework, with area selection, text selection, and quick typing modes. It supports offline translation for 20 languages and optional DeepL, Google, and Azure engines for broader coverage. Released as free and open-source software under the GPL-3.0 license.

- **YouTube Multi-Subtitle for Chinese Learning**  \
[[Demo]](https://drive.google.com/file/d/1WmT2IQ4T5gLBT0N3Sk-45IiQUS7ltTe3/view?usp=sharing)  \
A Chrome extension that displays three subtitle tracks simultaneously (English, Chinese characters, and Pinyin) to enhance Chinese language learning through YouTube videos. The extension automatically converts Chinese characters to Pinyin in real-time and supports loading subtitles from multiple sources including machine translation, replacing YouTube's default subtitle with a custom overlay that provides all necessary linguistic information in one place.

- **Easy - Expense Report Automation Chrome Extension**  \
[[Chrome Web Store]](https://chromewebstore.google.com/detail/easy/mbmlphiomneaknjpepfccckfilofplhg) [[PDF]](https://drive.google.com/file/d/1GAv7uln8UF5-t-IVx6wlKW0111Zs9mjj/view?usp=sharing) [[PPT]](https://docs.google.com/presentation/d/194w5Yg0nA6T492n19CPpbtq_OuuKHC08u1It6EScL1A/edit?usp=sharing)  \
A Chrome extension that automates the monthly expense report (지출결의) process for company employees. It reduces approximately one hour of manual work each month to a few minutes by automating form filling and navigation.

# 🌟 Open Source Contributions
- **claude-hud**  \
[[PR #599]](https://github.com/jarrodwatts/claude-hud/pull/599)  \
Contributed to <a href="https://github.com/jarrodwatts/claude-hud" style="color: #7289da; text-decoration: none;">claude-hud</a>, a status-line HUD for Claude Code. Reworked the usage display so external balance information and stdin-provided rate-limit windows render together as complementary segments instead of being mutually exclusive, while keeping the change backward-compatible for users without an external snapshot configured. (Merged)
