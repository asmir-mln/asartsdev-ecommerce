import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Svg,
  Path,
  Circle,
} from '@react-pdf/renderer';

// ─── Palette ────────────────────────────────────────────────────────────────
const COLORS = {
  primary: '#667eea',
  secondary: '#764ba2',
  dark: '#2c3e50',
  light: '#f5f7fa',
  white: '#ffffff',
  gray: '#666666',
  lightGray: '#e8e8e8',
  starFilled: '#f5a623',
  starEmpty: '#d0d0d0',
};

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: COLORS.white,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: COLORS.dark,
  },

  // Header
  header: {
    backgroundColor: COLORS.primary,
    padding: '24 32 20 32',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoCircle: {
    width: 52,
    height: 52,
    marginRight: 16,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.white,
    marginBottom: 3,
  },
  jobTitle: {
    fontSize: 13,
    color: COLORS.white,
    opacity: 0.9,
    marginBottom: 2,
  },
  brand: {
    fontSize: 10,
    color: COLORS.white,
    opacity: 0.75,
    fontStyle: 'italic',
  },

  // Body two-column layout
  body: {
    flexDirection: 'row',
    flex: 1,
  },

  // Left sidebar
  sidebar: {
    width: '35%',
    backgroundColor: COLORS.light,
    padding: '20 16',
  },
  sidebarSection: {
    marginBottom: 18,
  },
  sidebarTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.primary,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.primary,
    paddingBottom: 4,
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },

  // Contact items
  contactRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  contactLabel: {
    fontFamily: 'Helvetica-Bold',
    width: 50,
    color: COLORS.gray,
    fontSize: 8.5,
  },
  contactLink: {
    color: COLORS.primary,
    fontSize: 8.5,
    flex: 1,
    textDecoration: 'none',
  },
  contactText: {
    fontSize: 8.5,
    flex: 1,
    color: COLORS.dark,
  },

  // Skills
  skillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    justifyContent: 'space-between',
  },
  skillName: {
    fontSize: 9,
    flex: 1,
  },
  starsRow: {
    flexDirection: 'row',
    marginLeft: 4,
  },

  // Languages
  languageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    justifyContent: 'space-between',
  },
  languageName: {
    fontSize: 9,
    flex: 1,
  },

  // Main content
  main: {
    flex: 1,
    padding: '20 24',
  },
  mainSection: {
    marginBottom: 16,
  },
  mainTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.primary,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.primary,
    paddingBottom: 4,
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },

  // Summary
  summaryText: {
    fontSize: 9.5,
    lineHeight: 1.6,
    color: COLORS.gray,
    fontStyle: 'italic',
  },

  // Experience / Education
  entryCard: {
    marginBottom: 10,
    paddingLeft: 8,
    borderLeftWidth: 2,
    borderLeftColor: COLORS.secondary,
  },
  entryTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10.5,
    marginBottom: 1,
  },
  entryMeta: {
    fontSize: 8.5,
    color: COLORS.gray,
    marginBottom: 3,
  },
  entryDescription: {
    fontSize: 9,
    lineHeight: 1.5,
    color: COLORS.dark,
  },

  // Footer
  footer: {
    backgroundColor: COLORS.dark,
    padding: '8 32',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: COLORS.white,
    fontSize: 8,
    opacity: 0.8,
  },
  footerLink: {
    color: COLORS.primary,
    fontSize: 8,
    textDecoration: 'none',
  },
});

// ─── Logo SVG inline ──────────────────────────────────────────────────────────
const AsArtLogo = () => (
  <Svg style={styles.logoCircle} viewBox="0 0 52 52">
    {/* Gradient-style circle background */}
    <Circle cx="26" cy="26" r="26" fill={COLORS.secondary} />
    <Circle cx="26" cy="26" r="22" fill={COLORS.primary} />
    {/* Stylised "A" letter */}
    <Path
      d="M26 10 L38 38 H33 L29.5 29 H22.5 L19 38 H14 Z M24 24 H28 L26 18 Z"
      fill={COLORS.white}
    />
  </Svg>
);

// ─── Star rating ──────────────────────────────────────────────────────────────
const Stars = ({ level, max = 5 }) => (
  <View style={styles.starsRow}>
    {Array.from({ length: max }).map((_, i) => (
      <Svg key={i} width={10} height={10} viewBox="0 0 20 20" style={{ marginLeft: 1 }}>
        <Path
          d="M10 1 L12.9 7 L19.5 7.6 L14.5 12 L16.2 18.5 L10 15 L3.8 18.5 L5.5 12 L0.5 7.6 L7.1 7 Z"
          fill={i < level ? COLORS.starFilled : COLORS.starEmpty}
        />
      </Svg>
    ))}
  </View>
);

// ─── Main PDF Document ────────────────────────────────────────────────────────
const CVDocument = ({ data }) => {
  const { name, title, brand, contact, summary, skills, experiences, education, languages } = data;

  return (
    <Document title={`CV – ${name}`} author={name} subject="CV Professionnel">
      <Page size="A4" style={styles.page}>

        {/* ── Header ── */}
        <View style={styles.header}>
          <AsArtLogo />
          <View style={styles.headerText}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.jobTitle}>{title}</Text>
            <Text style={styles.brand}>{brand}</Text>
          </View>
        </View>

        {/* ── Body ── */}
        <View style={styles.body}>

          {/* ─ Sidebar ─ */}
          <View style={styles.sidebar}>

            {/* Contact */}
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>Contact</Text>
              <View style={styles.contactRow}>
                <Text style={styles.contactLabel}>Email</Text>
                <Link src={`mailto:${contact.email}`} style={styles.contactLink}>
                  {contact.email}
                </Link>
              </View>
              <View style={styles.contactRow}>
                <Text style={styles.contactLabel}>Tél</Text>
                <Text style={styles.contactText}>{contact.phone}</Text>
              </View>
              <View style={styles.contactRow}>
                <Text style={styles.contactLabel}>Lieu</Text>
                <Text style={styles.contactText}>{contact.location}</Text>
              </View>
              <View style={styles.contactRow}>
                <Text style={styles.contactLabel}>Web</Text>
                <Link src={contact.website} style={styles.contactLink}>
                  {contact.website.replace('https://', '')}
                </Link>
              </View>
              <View style={styles.contactRow}>
                <Text style={styles.contactLabel}>GitHub</Text>
                <Link src={contact.github} style={styles.contactLink}>
                  {contact.github.replace('https://', '')}
                </Link>
              </View>
              <View style={styles.contactRow}>
                <Text style={styles.contactLabel}>LinkedIn</Text>
                <Link src={contact.linkedin} style={styles.contactLink}>
                  linkedin.com/in/asmir-milianni
                </Link>
              </View>
            </View>

            {/* Skills */}
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>Compétences</Text>
              {skills.map((skill) => (
                <View key={skill.name} style={styles.skillRow}>
                  <Text style={styles.skillName}>{skill.name}</Text>
                  <Stars level={skill.level} />
                </View>
              ))}
            </View>

            {/* Languages */}
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>Langues</Text>
              {languages.map((lang) => (
                <View key={lang.name} style={styles.languageRow}>
                  <Text style={styles.languageName}>{lang.name}</Text>
                  <Stars level={lang.level} />
                </View>
              ))}
            </View>

          </View>

          {/* ─ Main ─ */}
          <View style={styles.main}>

            {/* Summary */}
            <View style={styles.mainSection}>
              <Text style={styles.mainTitle}>Profil</Text>
              <Text style={styles.summaryText}>{summary}</Text>
            </View>

            {/* Experience */}
            <View style={styles.mainSection}>
              <Text style={styles.mainTitle}>Expérience</Text>
              {experiences.map((exp) => (
                <View key={exp.title} style={styles.entryCard}>
                  <Text style={styles.entryTitle}>{exp.title}</Text>
                  <Text style={styles.entryMeta}>
                    {exp.company} · {exp.period}
                  </Text>
                  <Text style={styles.entryDescription}>{exp.description}</Text>
                </View>
              ))}
            </View>

            {/* Education */}
            <View style={styles.mainSection}>
              <Text style={styles.mainTitle}>Formation</Text>
              {education.map((edu) => (
                <View key={edu.degree} style={styles.entryCard}>
                  <Text style={styles.entryTitle}>{edu.degree}</Text>
                  <Text style={styles.entryMeta}>
                    {edu.school} · {edu.year}
                  </Text>
                </View>
              ))}
            </View>

          </View>
        </View>

        {/* ── Footer ── */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 {name} – {brand}</Text>
          <Link src={contact.website} style={styles.footerLink}>
            {contact.website.replace('https://', '')}
          </Link>
        </View>

      </Page>
    </Document>
  );
};

export default CVDocument;
