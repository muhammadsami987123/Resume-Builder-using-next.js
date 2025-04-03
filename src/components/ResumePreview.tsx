import { ResumeData } from '../types/resume';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

interface ResumePreviewProps {
  data: ResumeData;
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottom: 1,
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 12,
    color: '#666',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  item: {
    marginBottom: 10,
  },
  itemHeader: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemSubheader: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
  },
  skills: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  skill: {
    fontSize: 12,
    backgroundColor: '#f0f0f0',
    padding: '2 5',
    borderRadius: 3,
  },
});

export default function ResumePreview({ data }: ResumePreviewProps) {
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.name}>
              {data.personalInfo.firstName} {data.personalInfo.lastName}
            </Text>
            <Text style={styles.contactInfo}>
              {data.personalInfo.email} | {data.personalInfo.phone} | {data.personalInfo.address}, {data.personalInfo.city}, {data.personalInfo.state} {data.personalInfo.zipCode}
            </Text>
          </View>

          {/* Summary */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.description}>{data.personalInfo.summary}</Text>
          </View>

          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu, index) => (
              <View key={index} style={styles.item}>
                <Text style={styles.itemHeader}>{edu.school}</Text>
                <Text style={styles.itemSubheader}>
                  {edu.degree} in {edu.field} | {edu.startDate} - {edu.endDate}
                </Text>
                <Text style={styles.description}>{edu.description}</Text>
              </View>
            ))}
          </View>

          {/* Experience */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {data.experience.map((exp, index) => (
              <View key={index} style={styles.item}>
                <Text style={styles.itemHeader}>{exp.company}</Text>
                <Text style={styles.itemSubheader}>
                  {exp.position} | {exp.startDate} - {exp.endDate}
                </Text>
                <Text style={styles.description}>{exp.description}</Text>
              </View>
            ))}
          </View>

          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skills}>
              {data.skills.map((skill, index) => (
                <Text key={index} style={styles.skill}>
                  {skill.name} ({skill.level}%)
                </Text>
              ))}
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
} 