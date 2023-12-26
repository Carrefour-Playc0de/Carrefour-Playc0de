import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaCaramelosGomitasChupetines extends BasePage {

    readonly CARAMELOS_GOMITAS_CHUPETINES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CARAMELOS_GOMITAS_CHUPETINES = this.page.locator('//a [@id="menu-item-category-caramelos-gomitas-chupetines"]')
    }

    async clickDesayunoMeriendaCaramelosGomitasChupetines(): Promise<void> {
        await this.click(this.CARAMELOS_GOMITAS_CHUPETINES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaCaramelosGomitasChupetines(): Promise<void> {
        await this.clickDesayunoMeriendaCaramelosGomitasChupetines()
    }
}
