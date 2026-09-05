---
title: "3D Point Cloud Classification for Autonomous Driving via Dense-Residual Fusion Network"

authors:
  - "Chung-Hsin Chiang"
  - "Chih-Hung Kuo"
  - "Chien-Chou Lin"
  - "Hsin-Te Chiang"


date: 2020-09-02
tags: ["journal"]

publication: "IEEE Access ( Volume: 8)"

abstract: |
  Compared with the state-of-the-art architectures, using the 3D point cloud as the input of the 2D convolutional neural network without preprocessing will restrict the feature expression of the network. To address this issue, we propose a high-precision classification network using bearing angle (BA) images, depth images, and RGB images. Due to the development of unmanned vehicles, determining how to recognize objects from the information collected by sensors is important. Our approach takes data from LiDAR and a camera and projects a 3D point cloud into 2D BA images and depth images. The RGB image captured by the camera is used to select the region of interest (ROI) corresponding to the point cloud. However, only adding input information is not enough to improve the classification ability of general convolutional neural networks. In our approach, we use a Dense-Residual Fusion Network (DRF-Net), which consists of Dense-Residual Blocks (DRBs). The Dense-Residual Fusion Network can achieve 97.92% accuracy with three input formats on a KITTI raw dataset.


links:
  - name: IEEE Access
    url: https://ieeexplore.ieee.org/document/9184791
---
