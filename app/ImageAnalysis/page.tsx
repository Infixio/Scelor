"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import MainButton from '@/app/components/MainButton';
import { useDropzone } from 'react-dropzone';
import type { FileWithPath } from 'react-dropzone'; 

export default function ImageAnalysis() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    onDrop: (acceptedFiles: FileWithPath[]) => { // Add type annotation
      const file = acceptedFiles[0];
      setUploadedImage(URL.createObjectURL(file));
    }
  });

  const handleAnalyzeImage = async () => {
    setIsProcessing(true);
    // Simulate analysis processing
    setTimeout(() => {
      setAnalysisResults({
        objects: ['person', 'car', 'tree'],
        colors: ['#FF6B6B', '#2CDB93', '#7E3AF2'],
        metadata: {
          width: 1920,
          height: 1080,
          format: 'JPEG',
          size: '2.4MB'
        },
        aiInsights: ['Contains outdoor scene', 'Likely daytime photo', 'Natural lighting detected']
      });
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] overflow-hidden">
      <Head>
        <title>Scelor - Image Analysis</title>
        <meta name="description" content="Advanced AI-powered image analysis workflow" />
      </Head>

      {/* Header - Same as homepage */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0F]/80 border-b border-[#2A2A3C]"
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF] bg-clip-text text-transparent">
            <Link href="/">Scelor</Link>
          </div>
          <ul className="flex space-x-8 items-center">
            {['Workflows', 'Pricing', 'About'].map((item) => (
              <li key={item}>
                <Link href={`/${item}`} className="text-[#A0A0C0] hover:text-white transition-all font-medium cursor-pointer">
                  {item}
                </Link>
              </li>
            ))}
            <button className="bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF] text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
              Get Started
            </button>
          </ul>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-20 pb-16 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF] bg-clip-text text-transparent">
              Image Analysis
            </span>
          </h1>
          <p className="text-xl text-[#A0A0C0] max-w-2xl mx-auto">
            Advanced visual recognition system powered by neural networks
          </p>
        </motion.div>

        {/* Upload Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all 
              ${isDragActive ? 'border-[#7E3AF2] bg-[#2A0D45]/20' : 'border-[#2A2A3C] hover:border-[#7E3AF2]'}`}
          >
            <input {...getInputProps()} />
            <div className="space-y-4">
              <div className="text-[#A0A0C0]">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {uploadedImage ? (
                  <p className="text-[#00C2FF]">Image ready for analysis!</p>
                ) : (
                  <p>Drag & drop image here, or click to select</p>
                )}
              </div>
              {uploadedImage && (
                <div className="mt-4">
                  <img 
                    src={uploadedImage} 
                    alt="Upload preview" 
                    className="mx-auto max-h-64 rounded-lg border border-[#2A2A3C]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Analysis Controls */}
        <div className="text-center mb-16">
          <button
            onClick={handleAnalyzeImage}
            disabled={!uploadedImage || isProcessing}
            className={`bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF] text-white px-8 py-4 rounded-xl 
              transition-all ${(!uploadedImage || isProcessing) ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
          >
            {isProcessing ? 'Analyzing...' : 'Start Analysis'}
          </button>
        </div>

        {/* Results Section */}
        {analysisResults && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#0F0F1A]/50 rounded-xl p-8 border border-[#2A2A3C]"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Analysis Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl text-[#00C2FF] mb-4">Detected Objects</h3>
                <div className="flex flex-wrap gap-2">
                  {analysisResults.objects.map((object: string, index: number) => (
                    <span key={index} className="px-3 py-1 rounded-full bg-[#2A0D45] text-[#7E3AF2]">
                      {object}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl text-[#00C2FF] mb-4">Dominant Colors</h3>
                <div className="flex gap-2">
                  {analysisResults.colors.map((color: string, index: number) => (
                    <div 
                      key={index}
                      className="w-12 h-12 rounded-full border border-[#2A2A3C]"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl text-[#00C2FF] mb-4">Metadata</h3>
                <div className="space-y-2 text-[#A0A0C0]">
                  <p>Dimensions: {analysisResults.metadata.width}x{analysisResults.metadata.height}</p>
                  <p>Format: {analysisResults.metadata.format}</p>
                  <p>Size: {analysisResults.metadata.size}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl text-[#00C2FF] mb-4">AI Insights</h3>
                <ul className="space-y-2 text-[#A0A0C0]">
                  {analysisResults.aiInsights.map((insight: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-[#7E3AF2]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl text-[#00C2FF] mb-4">Raw Data</h3>
              <pre className="bg-[#0A0A0F] p-4 rounded-lg overflow-x-auto text-[#A0A0C0]">
                {JSON.stringify(analysisResults, null, 2)}
              </pre>
            </div>
          </motion.div>
        )}
      </main>

      {/* Footer - Same as homepage */}
      <footer className="relative z-10 bg-gradient-to-b from-[#0A0A0F] to-[#00101A] border-t border-[#2A2A3C]">
        {/* ... Include the same footer component from your homepage ... */}
      </footer>
    </div>
  );
}