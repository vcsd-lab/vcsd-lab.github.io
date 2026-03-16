---
title: "Enabling Efficient Integer-Only Few-Shot Learning on Edge Devices"

authors:
  - "Che-Juei Kuo"
  - "Chih-Hung Kuo"
  - "Chia-Hao Hu"

date: 2026-02-13
tags: ["journal"]
publication: "IEEE Embedded Systems Letters"

abstract: |
  On-device neural network training has emerged as a key enabler for privacy-
  preserving and personalized data processing at the edge. However, the 
  deployment of Few-Shot Learning (FSL) methods on resource-constrained devices 
  remains underexplored, despite its strong potential for rapid adaptation with 
  minimal data. We present an efficient on-device FSL approach termed Integer-
  Only Few-shot Adaptation (IOFA), a fully quantized fine-tuning pipeline 
  covering forward, backward, and update phases. Experiments on MiniImageNet 
  show that fully-static INT8 meta-test achieves 45.01% accuracy in 1-shot tasks
  and 61.36% accuracy in 5-shot settings, with accuracy losses of only 2.34% and
  1.75%, respectively, compared to a floating-point implementation. We preserve 
  few-shot accuracy by performing all meta-test operations in integer arithmetic 
  while drastically reducing memory and compute demands, enabling practical 
  deployment on memory-limited embedded systems.

links:
  - name: IEEE Access
    url: https://ieeexplore.ieee.org/document/11396015

---
