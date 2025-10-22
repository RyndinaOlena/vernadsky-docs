# Metrological Data Description

## Data Structures

The system stores two main categories of data:

### 1. Primary (raw) data

- direct measurement results;  
- observation logs, technical reports;  
- used for verification and reproducibility:  
  error correction, reprocessing with alternative algorithms, cross-calibration of instruments, long-term analysis of instrument characteristics;  
- intended primarily for data providers;  
- **access**: only upon request through the administrator.

### 2. Scientific data

- intended for publication in formats adopted by the **INTERMAGNET** network;  
- derived from primary data through standardized processing;  
- include:
  - magnetic field variation records cleaned from artifacts;  
  - baseline (from absolute measurements);  
  - **K-indices** (derived from magnetograms).  
- requirements and formats: see **INTERMAGNET Technical Reference Manual**.

---

## Daily Files vs Continuous Arrays

Limitation of standard second/minute data (category 2): time series are restricted to a single day, which complicates the analysis of long geomagnetic events.

**Our approach**:

- generate a **continuous array of one-second measurements** (1 Hz);  
- allow merging of long time intervals;  
- provide visualization and export for arbitrary time spans;  
- support resampling (e.g. 1 s → 5 s, 1 min, 1 h).

---

## Access

- Scientific data: available to authorized users via the web interface, in **IAGA-2002** format.  
- Primary data: issued only upon request through the administrator.
