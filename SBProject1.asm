; XYProject1.asm
; Example file name for John L. Smith would be JSProject1.asm

.386
.model flat, stdcall
.stack 4096
ExitProcess PROTO, dwExitCode:DWORD

.data
left        WORD  3799               ; 4 most significant digits of student ID
right       WORD  78                 ; 3 least significant digits of student ID
message     db    'Hello World!',0   ; Character string
numbers     WORD  1, 2, 4, 8, 16, 32, 64 ; Array of WORDs
arrayLength WORD  7                  ; Length of the numbers array

.data?
total       DWORD ?
diff        DWORD ?

.code
main PROC
    ; Calculate total = left + right
    movzx   eax, left            ; Move left into EAX
    movzx   ebx, right           ; Move right into EBX
    add     eax, ebx             ; EAX = left + right
    mov     total, eax           ; Store the result in total

    ; Calculate diff = |left - right|
    movzx   eax, left            ; Move left into EAX
    movzx   ebx, right           ; Move right into EBX
    sub     eax, ebx             ; EAX = left - right
    jns     positive             ; If result is non-negative, jump to positive
    neg     eax                  ; Otherwise, negate EAX to get positive difference
positive:
    mov     diff, eax            ; Store the result in diff

    ; Move variables into registers
    mov     eax, total           ; Move total into EAX
    mov     ebx, diff            ; Move diff into EBX
    mov     ecx, total           ; Move total into ECX
    mov     edx, diff            ; Move diff into EDX
    mov     esi, arrayLength     ; Move arrayLength into ESI

    ; Exit program
    invoke ExitProcess, 0

main ENDP
END main

