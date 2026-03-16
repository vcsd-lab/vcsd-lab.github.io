---
title: "Variational Channel Distribution Pruning and Mixed-Precision Quantization for Neural Network Model Compression"

authors:
  - "Wan-Ting Chang"
  - "Chih-Hung Kuo"
  - "Li-Chun Fang"

date: 2022-04-18
tags: ["conference"]

publication: "2022 International Symposium on VLSI Design, Automation and Test (VLSI-DAT)"

abstract: |
  This paper presents a model compression frame-work for both pruning and quantizing according to the channel distribution information. We apply the variational inference technique to train a Bayesian deep neural network, in which the parameters are modeled by probability distributions. According to the characteristic of the probability distribution, we can prune the redundant channels and determine the bit-width layer by layer. The experiments conducted on the CIFAR10 dataset with the VGG16 show that the number of parameters can be saved by 58.91x. The proposed compression approach can help implement hardware circuits for efficient edge and mobile computing.

links:
  - name: IEEE Access
    url: https://ieeexplore.ieee.org/document/9768055
---
