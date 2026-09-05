---
title: "Two Pass Rate Control for Consistent Quality Based on Down-Sampling Video in HEVC"

authors:
  - "Yu-Yao Shen"
  - "Chih-Hung Kuo"

date: 2018-07-23
tags: ["conference"]

publication: "2018 IEEE International Conference on Multimedia and Expo (ICME)"

abstract: |
  Rate control plays an important role in video coding and streaming applications with bandwidth constraints. While most researches are proposed to improve the coding efficiency' the fluctuation of video quality is seldom considered. Many rate control schemes suffer from unreliable initialization of coding parameters, which leads to seriously inconsistent quality at the beginning of a video. Besides, the hierarchical structure for frame references introduces more quality fluctuations, although it improves the coding efficiency significantly. This paper presents a two pass rate control method that aims for a consistent visual quality. The video is down-sampled by four times, and then encoded for the first pass. A fixed Lagrange multiplier (λ) is derived from the information recorded in the first pass, and then applied for all frames in the second coding pass. A QP adjustment policy is adopted to maintain a consistent quality and a constant bitrate. Experimental results show that the proposed rate control method can reduce the fluctuation of video quality to be averagely 94.63% less than that encoded by the HEVC Test Model (HM16.9).

links:
  - name: IEEE Access
    url: https://ieeexplore.ieee.org/document/8486544
---
