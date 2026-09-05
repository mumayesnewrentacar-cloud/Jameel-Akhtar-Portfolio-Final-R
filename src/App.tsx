import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ValuesSection } from './components/ValuesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FinancialModelingShowcase } from './components/FinancialModelingShowcase';
import { AccountingKnowledgeSection } from './components/AccountingKnowledgeSection';
import { DataAnalyticsSection } from './components/DataAnalyticsSection';
import { ToolsSection } from './components/ToolsSection';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeDownloadModal } from './components/ResumeDownloadModal';
import { AnimatedSection } from './components/AnimatedSection';
import { CinematicAmbientCanvas, CinematicTelemetryBar } from './components/CinematicAmbientCanvas';
import { CinematicThemeCrossfade } from './components/CinematicThemeCrossfade';
import { ScrollToTopButton } from './components/ScrollToTopButton';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300 transition-colors duration-450">
      {/* Background Cinematic Luminous Glows */}
      <CinematicAmbientCanvas />

      {/* Cinematic Theme Cross-Fade Exposure Shutter */}
      <CinematicThemeCrossfade />

      {/* Top Financial Telemetry Ticker */}
      <CinematicTelemetryBar />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Main Content Sections with Viewport-Triggered Staggered Reveals */}
      <main className="relative flex flex-col z-10">
        {/* 1. Hero Section & Financial Analytics Visual System */}
        <AnimatedSection index={0} threshold={0.05}>
          <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />
        </AnimatedSection>


        {/* 2. Professional Summary & Storytelling Arc */}
        <AnimatedSection index={1}>
          <AboutSection onOpenCVModal={() => setIsCVModalOpen(true)} />
        </AnimatedSection>

        {/* 3. Core Operating Values: How I Add Value */}
        <AnimatedSection index={2}>
          <ValuesSection />
        </AnimatedSection>

        {/* 4. Professional Experience Vertical Timeline */}
        <AnimatedSection index={3}>
          <ExperienceSection />
        </AnimatedSection>

        {/* 5. Categorized Skills & Technical Competencies */}
        <AnimatedSection index={4}>
          <SkillsSection />
        </AnimatedSection>

        {/* 6. Featured Financial Projects (with Interactive Details Modal) */}
        <AnimatedSection index={5}>
          <ProjectsSection />
        </AnimatedSection>

        {/* 7. Dedicated Financial Modeling Cascade & Node Inspector */}
        <AnimatedSection index={6}>
          <FinancialModelingShowcase />
        </AnimatedSection>

        {/* 8. Accounting & Reporting Expertise (8-Stage Cycle & Principles) */}
        <AnimatedSection index={7}>
          <AccountingKnowledgeSection />
        </AnimatedSection>

        {/* 9. From Raw Data to Financial Insight (ETL & Live Analytics Views) */}
        <AnimatedSection index={8}>
          <DataAnalyticsSection />
        </AnimatedSection>

        {/* 10. Technology & Financial Systems Grid */}
        <AnimatedSection index={9}>
          <ToolsSection />
        </AnimatedSection>

        {/* 11. Academic Education & Verified Certifications */}
        <AnimatedSection index={10}>
          <EducationCertifications />
        </AnimatedSection>

        {/* 12. Work Together Resume CTA & Direct Contact Form */}
        <AnimatedSection index={11}>
          <ContactSection onOpenCVModal={() => setIsCVModalOpen(true)} />
        </AnimatedSection>
      </main>

      {/* Footer */}
      <Footer onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Executive CV Modal */}
      <ResumeDownloadModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      {/* Floating Back to Top Action Button */}
      <ScrollToTopButton threshold={350} />
    </div>
  );
}
