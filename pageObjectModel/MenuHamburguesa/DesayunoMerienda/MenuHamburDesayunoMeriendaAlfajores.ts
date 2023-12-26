import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaAlfajores extends BasePage {

    readonly ALFAJORES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ALFAJORES = this.page.locator('//a [@id="menu-item-category-alfajores"]')
    }

    async clickDesayunoMeriendaAlfajores(): Promise<void> {
        await this.click(this.ALFAJORES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaAlfajores(): Promise<void> {
        await this.clickDesayunoMeriendaAlfajores()
    }
}
