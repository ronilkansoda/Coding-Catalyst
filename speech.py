import os
import speech_recognition as sr

def recognize_speech(video_path):
    # Initialize the recognizer
    recognizer = sr.Recognizer()
    
    # Load the video file
    video = sr.AudioFile(video_path)
    
    # Use the recognizer to recognize speech from the video
    with video as source:
        audio = recognizer.record(source)
        
    # Perform speech recognition
    try:
        text = recognizer.recognize_google(audio)
        return text
    except sr.UnknownValueError:
        return "Speech recognition could not understand audio"
    except sr.RequestError as e:
        return f"Could not request results from Google Speech Recognition service; {e}"

if __name__ == "__main__":
    # Example usage
    video_path = "C:/Users/WEBCLUES/Desktop/Hackthon 2024/Coding-Catalyst/js.mp4"  # Change this to the path of your video file
    
    # Check if the video file exists
    if not os.path.exists(video_path):
        print("Video file not found.")
    else:
        # Recognize speech from the video
        result = recognize_speech(video_path)

        # Print the transcribed text
        print("Transcribed text:")
        print(result)
