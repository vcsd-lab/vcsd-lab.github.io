---
title: "Edge-Guided Video Super-Resolution Network"

authors:
  - "Haohsuan Tseng"
  - "Chih-Hung Kuo"
  - "Yiting Chen"
  - "Sinhong Lee"

date: 2022-11-07
tags: ["conference"]

publication: "2022 IEEE International Conference on Recent Advances in Systems Science and Engineering (RASSE)"

abstract: |
  In this paper, we propose an edge-guided video super-resolution (EGVSR) network that utilizes the edge information of the image to effectively recover high-frequency details for high-resolution frames. The reconstruction process consists of two stages. In the first stage, the Coarse Frame Reconstruction Network (CFRN) generates coarse SR frames. In addition, we propose the Edge-Prediction Network (EPN) to capture the edge details that help to supplement the missing high-frequency information. Unlike some prior SR works that tend to increase the depth of networks or use attention mechanisms to reconstruct large-size objects but ignore small-size objects, we propose the Attention Fusion Residual Block (AFRB) to process objects of different sizes. The AFRB, an enhanced version of the conventional residual block, performs fusion through a multi-scale channel attention mechanism and serves as the basic operation unit in the CFRN and the EPN. Then, in the second stage, we propose the Frame Refinement Network (FRN), which contains multiple convolution layers. Through the FRN, we fuse and refine the coarse SR frames and edge information learned from the first stage. Compared with the state-of-the-art methods, our SR model improves approximately 0.5% in PSNR and 1.8% in SSIM evaluation on the benchmark VID4 dataset when the number of parameters is reduced by 54%.

links:
  - name: IEEE Access
    url: https://ieeexplore.ieee.org/document/9989570
---
