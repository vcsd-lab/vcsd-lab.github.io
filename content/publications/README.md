---
title: "Developer Notes: How to add publication"
build:
  render: never
  list: never
---
1. add new directory
```
mkdir my-paper
cd my-paper
```
2. add index.md in create directory
```
touch index.md
```
3. edit index.md, write information in index.md
index.md example:
```
---
title: "Enabling Efficient Integer-Only Few-Shot Learning on Edge Devices"

authors:
  - "Che-Juei Kuo"
  - "Chih-Hung Kuo"
  - "Chia-Hao Hu"

date: 2026-02-13

tags: ["Journal"]
<!-- fill in correct publication's type
Preprint
Conference
Journal
Book
Report
-->

publication: "IEEE Embedded Systems Letters"

abstract: |
  On-device neural network training has emerged as a key enabler for privacy-preserving and personalized data processing at the edge. However, the deployment of Few-Shot Learning (FSL) methods on resource-constrained devices remains underexplored, despite its strong potential for rapid adaptation with minimal data. We present an efficient on-device FSL approach termed Integer-Only Few-shot Adaptation (IOFA), a fully quantized fine-tuning pipeline covering forward, backward, and update phases. Experiments on MiniImageNet show that fully-static INT8 meta-test achieves 45.01% accuracy in 1-shot tasks and 61.36% accuracy in 5-shot settings, with accuracy losses of only 2.34% and 1.75%, respectively, compared to a floating-point implementation. We preserve few-shot accuracy by performing all meta-test operations in integer arithmetic while drastically reducing memory and compute demands, enabling practical deployment on memory-limited embedded systems.


links:
  - name: IEEE Access
    url: https://ieeexplore.ieee.org/document/11396015
<!--
  NOTE: you can add more like above format
  - name: PDF
    url: paper.pdf
  - name: Code
    url: https://github.com/yourrepo
  - name: Project
    url: https://yourprojectpage.com
-->
---
```

4. if pdf is available, put it in my-paper/ and rename it to paper.pdf
content
 └── publication
     ├── my-paper1
     │   ├── index.md
     │   └── paper.pdf
     ├── my-paper2
     │   └── index.md
     └── my-paper3
         └── index.md

