---
title: "Design of 2D Systolic Array Accelerator for Quantized Convolutional Neural Networks"

authors:
  - "Chia-Ning Liu"
  - "Yu-An Lai"
  - "Chih-Hung Kuo"
  - "Shi-An Zhan"

date: 2021-04-19
tags: ["conference"]

publication: "2021 International Symposium on VLSI Design, Automation and Test (VLSI-DAT)"

abstract: |
  Quantization techniques have been studied to reduce the computing and memory requirement of deep neural networks. The full precision floating-point numbers are quantized into integer representation with lower bit-width. In this work, we quantize both activations and weights in CNN to 8-bit integers and apply our quantization method to the hardware accelerator. The accelerator is designed with a systolic-based structure, which can support both the convolutional layers and the fully-connected layers for various network models. By the proposed quantization scheme, there is only 1.68% mAP loss on YOLOv3-tiny model compared to the floating-point model. Benchmarked with AlexNet and VGG-16, the external memory access of convolutional layers is reduced by 1.63x and 1.79x compared with Eyeriss, and the internal memory access is also reduced by 7.31x and 17.48x.

links:
  - name: IEEE Access
    url: https://ieeexplore.ieee.org/document/9427336
---
