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

I am a **Research Scientist/Engineer** at <a href="https://vuno.co/" style="color: #7289da; text-decoration: none;">VUNO</a>. I obtained my Master's from the Graduate School of AI at KAIST, under the supervision of Prof. <a href="http://www.sungjuhwang.com/" style="color: #7289da; text-decoration: none;">Sung Ju Hwang</a>. If you are interested in collaborating with me on research projects, please contact me! Here is my <a href="/assets/cv.pdf" style="color: #7289da; text-decoration: none;">CV (Curriculum Vitae)</a>.

**My primary research interests** include developing innovative AI solutions that address real-world challenges across diverse domains, with a commitment to making a meaningful impact on society by bridging the gap between AI and people through both research and engineering. My current interests involve:
- **Training task-specific AI models**: Leveraging the growing capabilities of foundation models in data-efficient settings, utilizing techniques such as knowledge distillation (KD), few-shot learning, self-supervised and semi-supervised learning, and active learning (AL).
- **Building automated systems**: Developing systems that genuinely automate and assist human workflows by integrating AI models such as large language models (LLMs), multimodal large language models (MLLMs) through instruction tuning, reinforcement learning (RL), and agentic AI frameworks.
- **Ensuring trust and safety of large models**: Making black-box large models behave as intended so that they genuinely benefit people, leveraging techniques such as verification, policy adherence, and behavior steering, with a particular focus on agents acting in real-world environments such as customer service, web, and embodied AI agents.

Outside of research, I enjoy learning new languages 📚 (currently studying <a href="#" onclick="toggleLanguage('spanish-content', document.querySelector('.spanish-btn')); return false;">**Spanish**</a> and <a href="#" onclick="toggleLanguage('chinese-content', document.querySelector('.chinese-btn')); return false;">**Chinese**</a>), swimming 🏊 (been doing for a long time), and continuous self-improvement and acceleration of personal growth in expertise and research.

<div class="language-toggle">
  <button class="toggle-btn spanish-btn" onclick="toggleLanguage('spanish-content', this)">🇪🇸 Ver en Español</button>
  <button class="toggle-btn chinese-btn" onclick="toggleLanguage('chinese-content', this)">🇨🇳 查看中文版</button>
  <button class="toggle-btn korean-btn" onclick="toggleLanguage('korean-content', this)">🇰🇷 한국어로 보기</button>
</div>

<div id="spanish-content" class="language-section spanish-section" style="display: none;">
  <p>Soy un <strong>Científico/Ingeniero de Investigación</strong> en <a href="https://vuno.co/" style="color: #7289da; text-decoration: none;">VUNO</a>. Obtuve mi Maestría en la Escuela de Posgrado de IA de KAIST, bajo la supervisión del Prof. <a href="http://www.sungjuhwang.com/" style="color: #7289da; text-decoration: none;">Sung Ju Hwang</a>. ¡Si estás interesado en colaborar conmigo en proyectos de investigación, por favor contáctame!</p>

  <p><strong>Mis intereses principales de investigación</strong> incluyen desarrollar soluciones innovadoras de IA que aborden desafíos del mundo real en diversos dominios. Me interesa entrenar modelos de IA específicos para tareas en entornos eficientes en datos (por ejemplo, destilación de conocimiento, aprendizaje de pocos ejemplos, aprendizaje auto-/semi-supervisado y aprendizaje activo), así como construir sistemas automatizados que realmente asistan los flujos de trabajo humanos integrando Modelos de Lenguaje Grande (LLMs), Modelos de Lenguaje Grande Multimodales (MLLMs) y marcos de IA agéntica. También me interesa la confianza y la seguridad de los modelos grandes: hacer que los modelos de caja negra se comporten como pretendemos — mediante verificación, adherencia a políticas y dirección de su comportamiento — para que beneficien genuinamente a las personas, con especial atención a agentes que actúan en entornos reales, como agentes de atención al cliente, web e IA encarnada.</p>

  <p>Fuera de la investigación, disfruto aprender nuevos idiomas 📚 (actualmente estudiando <strong>español</strong> y <strong>chino</strong>), nadar 🏊 (trato de nadar al menos dos veces por semana), y la mejora continua personal y la aceleración del crecimiento personal en experiencia e investigación.</p>
</div>

<div id="chinese-content" class="language-section chinese-section" style="display: none;">
  <p>我是<a href="https://vuno.co/" style="color: #7289da; text-decoration: none;">VUNO</a>的<strong>研究科学家/工程师</strong>。我在KAIST人工智能研究生院获得了硕士学位，师从<a href="http://www.sungjuhwang.com/" style="color: #7289da; text-decoration: none;">Sung Ju Hwang</a>教授。如果您有兴趣与我在研究项目上合作，请随时联系我！</p>

  <p><strong>我的主要研究兴趣</strong>包括开发创新的AI解决方案，以应对各个领域的现实挑战。我关注在数据高效的场景下训练任务专用的AI模型（例如知识蒸馏、少样本学习、自监督/半监督学习和主动学习），以及通过整合大型语言模型（LLMs）、多模态大型语言模型（MLLMs）和智能体AI框架，构建真正能自动化并辅助人类工作流程的系统。此外，我也关注大模型的可信与安全：通过验证、策略遵循和行为引导，让黑盒大模型按照我们的意图行事，从而真正造福人类，尤其是在客服、网页和具身AI等真实环境中行动的智能体。</p>

  <p>除了研究之外，我喜欢学习新语言📚（目前正在学习<strong>西班牙语</strong>和<strong>中文</strong>），游泳🏊（我尽量每周游泳至少两次），以及在专业知识和研究方面不断自我提升和加速个人成长。</p>
</div>

<div id="korean-content" class="language-section korean-section" style="display: none;">
  <p>현재 <a href="https://vuno.co/" style="color: #7289da; text-decoration: none;">VUNO</a>에서 전문연구요원으로 일하고 있습니다. KAIST 인공지능대학원에서 <a href="http://www.sungjuhwang.com/" style="color: #7289da; text-decoration: none;">황성주</a> 교수님 지도로 석사학위를 받았습니다. 연구 협업에 관심 있으시면 언제든지 연락주세요!</p>

  <p>현실에서 다양한 문제들을 AI를 이용해서 푸는 것에 관심이 많습니다. 데이터 효율적인 환경에서 태스크 특화 AI 모델을 학습하는 것(e.g., knowledge distillation, few-shot learning, self-/semi-supervised learning, active learning)과, 대규모 언어 모델(LLM), 멀티모달 대규모 언어 모델(MLLM), 에이전틱 AI 프레임워크를 활용해 사람의 업무를 실제로 자동화하고 보조하는 시스템을 만드는 것에 관심이 있습니다. 또한 블랙박스 대규모 모델이 우리가 의도한 대로 동작하도록 만드는 신뢰성과 안전성(trust & safety) 연구에도 관심이 있습니다. 검증(verification), 정책 준수(policy adherence), 행동 제어(behavior steering) 등을 통해 대규모 모델이 사람에게 진정으로 도움이 되도록 하는 것이며, 특히 고객 상담, 웹, 임바디드 AI처럼 실제 환경에서 동작하는 에이전트의 안전성에 관심이 있습니다.</p>

  <p>연구 외에도 새로운 언어 배우는 걸 정말 좋아하고 수영도 오래전부터 즐겨오고 있습니다! 개인적인 성장과 발전에도 항상 관심이 많습니다 🌱✨.</p>

  <p>감사합니다 🙇</p>
</div>

# 🔥 News
- *2026.06*: &nbsp;🎉 One paper accepted at <strong>ML for Audio Workshop @ ICML 2026</strong>!
- *2026.05*: &nbsp;🎉 One paper accepted at <strong>ScaleBot Workshop @ CVPR 2026</strong>!
- *2026.01*: &nbsp;🎉 One paper accepted at <strong>ICLR 2026</strong>!
- *2025.07*: &nbsp;🎉 Renewed personal website with latest information

# 📝 Selected Publications

- <font size="3">PolicyGuard: A Dialogue-Grounded Sub-Agent Verifier for Policy Adherence in LLM Agents</font>
[[paper]](https://arxiv.org/abs/2606.29225) [[project page]](https://huggingface.co/papers/2606.29225)  \
**Seongjae Kang**, Taehyung Yu, Sung Ju Hwang  \
<span style="color:purple">Under Review</span>

- <font size="3">Automated Structured Radiology Report Generation with Rich Clinical Context</font>
[[paper]](https://arxiv.org/abs/2510.00428) [[project page]](https://huggingface.co/papers/2510.00428) [[github]](https://github.com/vuno/contextualized-srrg)  \
**Seongjae Kang** *, Dong Bok Lee *, Juho Jung, Dongseop Kim, Won Hwa Kim, Sunghoon Joo (\* equal contribution)  \
<span style="color:purple">Under Review</span>

- <font size="3">PCoreSet: Effective Active Learning through Knowledge Distillation from Vision-Language Models</font>
[[paper]](https://arxiv.org/abs/2506.00910) [[project page]](https://huggingface.co/papers/2506.00910) [[github]](https://github.com/erjui/PCoreSet)  \
**Seongjae Kang** *, Dong Bok Lee *, Hyungjoon Jang, Dongseop Kim, Sung Ju Hwang (\* equal contribution)  \
<span style="color:purple">Under Review</span>

- <font size="3">Simple yet Effective Semi-supervised Knowledge Distillation from Vision-Language Models via Dual-Head Optimization</font>
[[paper]](https://arxiv.org/abs/2505.07675) [[project page]](https://huggingface.co/papers/2505.07675) [[github]](https://github.com/erjui/DHO)  \
**Seongjae Kang** *, Dong Bok Lee *, Hyungjoon Jang, Sung Ju Hwang (\* equal contribution)  \
<span style="color:purple">Under Review</span>

- <font size="3">CostNav: A Navigation Benchmark for Real-World Economic-Cost Evaluation of Physical AI Agents</font>
[[paper]](https://arxiv.org/abs/2511.20216) [[project page]](https://worv-ai.github.io/costnav/) [[blog]](https://worv.ghost.io/costnav-2/) [[github]](https://github.com/worv-ai/CostNav)  \
Haebin Seong, Sungmin Kim, Yongjun Cho, Myunchul Joe, ..., **Seongjae Kang**, ..., Youngjae Yu, Yunsung Lee  \
<span style="color:purple">ScaleBot @ CVPR 2026</span>

- <font size="3">Frequency-Balanced Retinal Representation Learning with Mutual Information Regularization</font>
[[paper]](https://openreview.net/pdf?id=K5tcKEQaUr) [[github]](https://github.com/vuno/RetMAE)  \
Seunghoon Lee, **Seongjae Kang**, Inhyuk Park, Gitaek Kwon, Jihyeon Baek, Doohyun Park  \
<span style="color:purple">ICLR 2026</span>

- <font size="3">Best-of-N TTS Evaluation is Confounded by ASR Family Alignment</font>
Taehyung Yu, **Seongjae Kang**  \
<span style="color:purple">ML for Audio Workshop @ ICML 2026</span>

- <font size="3">High-Suspicion Pulmonary Nodule Detection on Chest Radiographs: Single-Center Retrospective Performance and Additional Detection Analysis of an AI System</font>
[[poster]](https://dx.doi.org/10.26044/ecr2026/C-19405)  \
Y. Hwang, S. Ham, Y. Jun, J. Kang, S. Cho, **S. Kang**, S. H. Lee  \
<span style="color:purple">ECR 2026 (Scientific Exhibit)</span>

# 📖 Education
- *2022.02 - 2024.02*, M.S. in Graduate School of AI, <a href="https://www.kaist.ac.kr/en/" style="color: #7289da; text-decoration: none;">KAIST</a>
- *2016.02 - 2022.02*, B.S. in Computer Science (major) and Electrical Engineering (minor), <a href="https://www.kaist.ac.kr/en/" style="color: #7289da; text-decoration: none;">KAIST</a>

# 💻 Work Experience
- *2024.05 - Present*, Research Scientist/Engineer (Military Substitution) at <a href="https://vuno.co/" style="color: #7289da; text-decoration: none;">VUNO</a>
- *2024.02 - 2024.03*, Research Scientist/Engineer at <a href="https://deepauto.ai/" style="color: #7289da; text-decoration: none;">Deepauto AI</a>
- *2020.09 - 2021.09*, Research Scientist/Engineer at <a href="https://www.voyagerx.com/" style="color: #7289da; text-decoration: none;">VoyagerX</a>
- *2019.03 - 2019.08*, Undergraduate Research Assistant at <a href="https://sgvr.kaist.ac.kr/" style="color: #7289da; text-decoration: none;">SGVR Lab</a>, KAIST, Daejeon, South Korea. Prof: <a href="https://sgvr.kaist.ac.kr/~sungeui/" style="color: #7289da; text-decoration: none;">Sung-eui Yoon</a>
- *2017.06 - 2018.06*, Undergraduate Research Assistant at <a href="http://mind.kaist.ac.kr" style="color: #7289da; text-decoration: none;">Computer Vision Lab</a>, KAIST, Daejeon, South Korea. Prof: Hyunseung Yang

# 🎓 Academic Service
- *2026*, Reviewer, <a href="https://icml.cc/" style="color: #7289da; text-decoration: none;">ICML 2026</a> — recognized as a <strong>Gold Reviewer</strong> (top reviewer recognition)

# 🚀 Selected Projects
- **ScreenTranslate — On-Device Screen Translation for macOS**  \
[[Website]](https://screentranslate.filient.ai/) [[GitHub]](https://github.com/hcmhcs/screenTranslate) [[Product Hunt]](https://www.producthunt.com/products/screentranslate)  \
**Problem.** Translating text that lives on screen — inside images, PDFs, apps, or videos — usually means screenshotting, switching to a browser, copy-pasting, and breaking focus, and cloud-based tools raise privacy concerns by shipping screen content to remote servers. **Method.** A native macOS menu-bar app that fuses screen capture, on-device OCR, and Apple's on-device Translation framework into a single shortcut-driven motion, with optional bring-your-own-key cloud engines (DeepL, Google, Azure) for broader language coverage. **Solution.** One shortcut triggers area selection → OCR → translation in place; direct text-selection and quick-type modes are also supported. It runs fully offline and private by default across 20 languages, and is free and open source (GPL-3.0).

- **YouTube Multi-Subtitle for Chinese Learning**  \
[[Demo]](https://drive.google.com/file/d/1WmT2IQ4T5gLBT0N3Sk-45IiQUS7ltTe3/view?usp=sharing)  \
A Chrome extension that displays three subtitle tracks simultaneously (English, Chinese characters, and Pinyin) to enhance Chinese language learning through YouTube videos. The extension automatically converts Chinese characters to Pinyin in real-time and supports loading subtitles from multiple sources including machine translation, replacing YouTube's default subtitle with a custom overlay that provides all necessary linguistic information in one place.

- **Easy - Expense Report Automation Chrome Extension**  \
[[Chrome Web Store]](https://chromewebstore.google.com/detail/easy/mbmlphiomneaknjpepfccckfilofplhg) [[PDF]](https://drive.google.com/file/d/1GAv7uln8UF5-t-IVx6wlKW0111Zs9mjj/view?usp=sharing) [[PPT]](https://docs.google.com/presentation/d/194w5Yg0nA6T492n19CPpbtq_OuuKHC08u1It6EScL1A/edit?usp=sharing)  \
A Chrome extension that automates the monthly expense report (지출결의) process for company employees. This tool reduces what typically takes 1-2 hours of manual work each month into just a few minutes with minimal effort, significantly improving productivity and reducing repetitive administrative tasks.

# 🌟 Open Source Contributions
- **claude-hud**  \
[[PR #599]](https://github.com/jarrodwatts/claude-hud/pull/599)  \
Contributed to <a href="https://github.com/jarrodwatts/claude-hud" style="color: #7289da; text-decoration: none;">claude-hud</a>, a status-line HUD for Claude Code. Reworked the usage display so external balance information and stdin-provided rate-limit windows render together as complementary segments instead of being mutually exclusive, while keeping the change backward-compatible for users without an external snapshot configured. (Merged)
